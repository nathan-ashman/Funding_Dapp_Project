const Fundraiser = artifacts.require("Fundraiser");
const ethers = require("ethers");
// import abi from '../src/abi_export.json';
// import bytecode from '../src/bytecode_export.json';

contract('Fundraiser',  function(accounts) {

    // it("should have only one campaign in the list", async function() {
    //     var instance = await Fundraiser.deployed();
    //     //makeCampaign(string memory sender, string memory _name, 
    //     //uint _goal, uint _maxDonation, string memory _fundType)
    //     await instance.makeCampaign(accounts[0], "Test Campaign", 500 , 100, "Charity", "www.google.com");
    //     const list = await instance.getList();
    //     assert.equal(list.length, 1, "should be only one campaign");
    // });

    it("should make a campaign and donate", async function() {
        var instance = await Fundraiser.deployed();
        //makeCampaign(string memory sender, string memory _name, 
        //uint _goal, uint _maxDonation, string memory _fundType)
        await instance.makeCampaign(accounts[0], "Test Campaign", 5000, 1000, "Charity", "");
        await instance.donate(0, {from: accounts[2], value: ethers.utils.parseEther("0.001")});
        const campaign = await instance.getCampaign(0);
        const currEther = campaign[5];
        console.log(currEther / 1E18);
        console.log(accounts[2]);
        // const expectedInWei = 1 * 1E18;
        assert.equal(currEther > 0, true, "should have 0.001 ether");
    });// <h1>Claim TestETH</h1>

    // it("should make and end a fundraiser once goal is reached", async function() {
    //     var instance = await Fundraiser.deployed();        
    //     //makeCampaign(string memory sender, string memory _name, 
    //     //uint _goal, uint _maxDonation, string memory _fundType)
    //     await instance.makeCampaign(accounts[0], "Test Campaign", 5, 1, "Charity", "www.google.com");
    //     for(let i=1; i<=5; i++){
    //         await instance.donate(0, {from: accounts[1], value: ethers.utils.parseEther("1")});
    //     }
    //     const campaign = await instance.getCampaign(0);
    //     const currEther = await instance.getEther(0);
    //     // console.log(currEther);

    //     // const expectedInWei = 5 * 1E18;
    //     // console.log(expectedInWei);
    //     // console.log(Number(balanceOfAccount) / 1E18);
    //     await instance.endFundraiser(0);
    //     const goal = campaign[2];
    //     assert.equal(currEther >= goal, true, "ether should be greater than or equal to the goal."); //will change as we test. 
    // });
});