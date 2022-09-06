const Fundraiser = artifacts.require("Fundraiser");
// let coverage = require("solidity-coverage")
module.exports = function (deployer) {
  deployer.deploy(Fundraiser);
};
