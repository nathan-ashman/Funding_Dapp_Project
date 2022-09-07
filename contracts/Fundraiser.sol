pragma solidity >= 0.8.0;

contract Fundraiser {
    struct Campaign {
        address creator;
        string name;
        uint goal;
        uint maxDonation;
        string fundType;
        uint etherAmount;
        string thumbnail;
    }
    Campaign[] campaignArr;

    address public owner;
    constructor() {
        owner = msg.sender;
    }
    

    function makeCampaign(address sender, string memory _name, uint256 _goal, uint256 _maxDonation, string memory _fundType, string memory _thumbnail) public {
        Campaign memory newCampaign = Campaign(sender, _name, _goal, _maxDonation, _fundType, 0, _thumbnail);
        campaignArr.push(newCampaign);
    }

    function donate(uint256 index) public payable { //notOwner(index)
        campaignArr[index].etherAmount = msg.value + campaignArr[index].etherAmount;
    }

    function isGoalReached(uint index) public view returns (bool)  {
        Campaign memory pulledCampaign = campaignArr[index];
        return pulledCampaign.etherAmount >= pulledCampaign.goal;
    }

    function endFundraiser(uint index) public payable {
        Campaign memory pulledCampaign = campaignArr[index];
        address _creator = pulledCampaign.creator;
        payable(_creator).transfer(pulledCampaign.etherAmount);
        delete campaignArr[index];
    }

    function getList() public view returns (Campaign[] memory) {
        return campaignArr;
    }

    function getEther(uint index) public view returns (uint) {
        Campaign memory pulledCampaign = campaignArr[index];
        return pulledCampaign.etherAmount;
    }

    function getCampaign(uint index) public view returns (Campaign memory) {
        return campaignArr[index];
    }
}



