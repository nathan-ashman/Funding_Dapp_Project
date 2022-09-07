function GuestHome() {
    let ipfsAPI = window.IpfsApi;
    console.log(ipfsAPI);
    // let buffer = ipfsAPI.Buffer;
    // const blob = new Blob(buffer);
    // const parsedGuestURL = URL.createObjectURL(blob);


    return(
        <div>
            <div class="row" id="guest-section">
                <div class="col">
                    <img id="guest-img" class="rounded float-left" src="./guest-image.webp" alt="" />
                </div>
                <div id="welcome-text" class="col">
                    <h2>Welcome to AshFund, a fundraiser powered by Ethereum (Goerli Testnet)! To get started with a campaign, please login using a wallet mnemonic or register a wallet address.</h2>
                </div>
            </div>
        </div>
    )
}


export default GuestHome;