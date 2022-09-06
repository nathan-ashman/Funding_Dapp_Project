/**
 Goerli:
 * https://goerli-faucet.mudit.blog/
 * https://goerlifaucet.com/
 * https://faucet.paradigm.xyz/
 * 
 Sepolia
 * https://faucet-sepolia.rockx.com/
 * https://faucet.sepolia.dev/
 * https://sepoliafaucet.net/

 <ul>
    <li>https://goerli-faucet.mudit.blog/</li>
    <li>https://goerlifaucet.com/</li>
    <li>https://faucet.paradigm.xyz/</li>
 </ul>
 * 


 wait on changing the links for the other testnet. 
 */

function FaucetLinks() {
    return(
        <div className="card" id="faucet-section">
            <div className="card-body">
                <h3>Wish to get more ether? Use these links below and paste your goerli address: </h3>          
                <ul id="faucet-links">
                    <li><a href="https://goerli-faucet.mudit.blog/" target="_blank"> Goerli Authenticated Faucet (requires Tweet only containing ETH address)</a></li>
                    <li><a href="https://faucet.goerli.dev/" target="_blank">Goerli FaucETH</a></li>
                    <li><a href="https://goerlifaucet.com/" target="_blank">Alchemy Goerli Faucet (requires an Alchemy account before you can request ETH) </a></li>
                    <li><a href="https://faucet.paradigm.xyz/" target="_blank"> Paradigm Goerli Faucet</a></li>
                </ul>
                
            </div>

        </div>
    )   
}

export default FaucetLinks;