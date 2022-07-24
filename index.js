const ethers = require("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
const signer = provider.getSigner();
