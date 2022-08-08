// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

contract Fundraiser {
    struct Campaign {
        string name;
        uint goal;
        uint maxDonation;
        string fundType;
    }
    Campaign myCampaign;
    uint public etherCollected = 0 ether;
    mapping(address => uint) public userDonations;
    address public owner;
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier donationWithinBounds {
        require(msg.value <= myCampaign.maxDonation);    
        _;
    }

    function makeCampaign(string memory _name, uint _goal, uint _maxDonation, string memory _fundType) public onlyOwner {
        myCampaign = Campaign(_name, _goal * 1 ether, _maxDonation * 1 ether, _fundType);
    }

    function donate() public payable donationWithinBounds {
        uint amount = msg.value;
        address sender = msg.sender;
        etherCollected += amount;
        userDonations[sender] += amount;
    }

    function isGoalReached() public view returns (bool) {
        return etherCollected >= myCampaign.goal;
    }

    function endFundraiser() public payable onlyOwner {
        payable(msg.sender).transfer(etherCollected);
    }


}
