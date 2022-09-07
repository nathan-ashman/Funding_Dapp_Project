const Fundraiser = artifacts.require("Fundraiser");
const ethers = require("ethers");
// import abi from '../src/abi_export.json';
// import bytecode from '../src/bytecode_export.json';

contract('Fundraiser',  function(accounts) {

    it("should have only one campaign in the list", async function() {
        var instance = await Fundraiser.deployed();
        await instance.makeCampaign(accounts[0], "Test Campaign", 500 , 100, "Charity", "www.google.com");
        const list = await instance.getList();
        assert.equal(list.length, 1, "should be only one campaign");
    });

    it("should make a campaign and donate", async function() {
        var instance = await Fundraiser.deployed();
        await instance.makeCampaign(accounts[0], "Test Campaign", ethers.utils.parseEther("0.6"), ethers.utils.parseEther("0.2"), "Charity", "www");
        await instance.donate(0, {from: accounts[2], value: ethers.utils.parseEther("0.1")});
        const campaign = await instance.getCampaign(0);
        const currEther = campaign[5];
        console.log(currEther / 1E18);
        const expectedInWei = 0.1 * 1E18;
        assert.equal(currEther, expectedInWei, "should have 0.1 ether");
    });

    it("should make and end a fundraiser once goal is reached", async function() {
        var instance = await Fundraiser.deployed();
        await instance.makeCampaign(accounts[0], "Test Campaign", ethers.utils.parseEther("5"), ethers.utils.parseEther("1"), "Charity", "www.google.com");
        for(let i=1; i<=5; i++){
            await instance.donate(0, {from: accounts[1], value: ethers.utils.parseEther("1")});
        }
        const campaign = await instance.getCampaign(0);
        const rawEther = await instance.getEther(0);
        const currEther = Number(rawEther); 
        const goalIsReached = await instance.isGoalReached(0);
        if(goalIsReached) await instance.endFundraiser(0);
        const goal = campaign[2];
        console.log("currEther", currEther, "goal", goal);
        assert.equal(currEther >= goal, true, "ether should be greater than or equal to the goal."); //will change as we test. 
    });
});