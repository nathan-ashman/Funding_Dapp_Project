function GuestHome() {
    let ipfsAPI = window.IpfsApi;
    console.log(ipfsAPI);
    // let buffer = ipfsAPI.Buffer;
    // const blob = new Blob(buffer);
    // const parsedGuestURL = URL.createObjectURL(blob);


    return(
        <div>
            <div class="row">
                <div class="col">
                    <img id="guest-img" class="rounded float-left" src="./guest-image.webp" alt="" />
                    


                    {/* https://ipfs.io/images/ipfs-logo.svg 
                    ./guest-image.webp
                    */}
                </div>
                <div id="welcome-text" class="col">
                    <h2>Welcome to AshFund! To get started with a campaign, please login or register.</h2>
                </div>
            </div>
        </div>
    )
}


export default GuestHome;