pragma solidity >= 0.8.0;

contract Fundraiser {
    struct Campaign {
        string creator;
        string name;
        uint goal;
        uint maxDonation;
        string fundType;
    }
    Campaign[] campaignArr;
    mapping(string => uint) public campaignEtherRaised;

    // uint public etherCollected = 0 ether;
    address public owner;
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(uint index) {
        Campaign memory pulledCampaign = campaignArr[index];
        require(keccak256(abi.encodePacked(pulledCampaign.creator)) == keccak256(abi.encodePacked(msg.sender)));
        _;
    }

    modifier notOwner(uint index) {
        Campaign memory pulledCampaign = campaignArr[index];
        require(keccak256(abi.encodePacked(pulledCampaign.creator)) != keccak256(abi.encodePacked(msg.sender)));
        _;
    }

    modifier donationWithinBounds(uint index) {
        Campaign memory currCampaign = campaignArr[index];
        require(msg.value <= currCampaign.maxDonation);    
        _;
    }

    function makeCampaign(string memory sender, string memory _name, uint _goal, uint _maxDonation, string memory _fundType) public {
        Campaign memory newCampaign = Campaign(sender, _name, _goal * 1 ether, _maxDonation * 1 ether, _fundType);
        campaignArr.push(newCampaign);
    }

    function donate(uint index) public payable donationWithinBounds(index) notOwner(index) {
        uint amount = msg.value;
        Campaign memory pulledCampaign = campaignArr[index];
        campaignEtherRaised[pulledCampaign.name] += amount;
    }

    function isGoalReached(uint index) onlyOwner(index) public view returns (bool)  {
        Campaign memory pulledCampaign = campaignArr[index];
        return campaignEtherRaised[pulledCampaign.name] >= pulledCampaign.goal;
    }

    function endFundraiser(uint index) public payable onlyOwner(index) {
        Campaign memory pulledCampaign = campaignArr[index];
        payable(msg.sender).transfer(campaignEtherRaised[pulledCampaign.name]);
    }

    function getList() public view returns (Campaign[] memory) {
        return campaignArr;
    }

    function getEther(string memory name) public view returns (uint) {
        return campaignEtherRaised[name];
    }

    function getCampaign(uint index) public view returns (Campaign memory) {
        return campaignArr[index];
    }

    // function getName(index) public view returns (string memory) {
    //     return myCampaign.name;
    // }

    // function getGoal() public view returns (uint) {
    //     return myCampaign.goal;
    // }

    // function getMaxDonation() public view returns (uint) {
    //     return myCampaign.maxDonation;
    // }

    // function getType() public view returns (string memory) {
    //     return myCampaign.fundType;
    // }


}



