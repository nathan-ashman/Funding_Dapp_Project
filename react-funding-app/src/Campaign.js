
import {useLocation} from 'react-router-dom';


function Campaign() {
    let rawContractData = useLocation().state.id;
    let ethers = require("ethers");
    let campaignContract = JSON.parse(rawContractData);
    let contractMethods = campaignContract.interface.functions;
    console.log(campaignContract); //"0x81531566165Decd0E5D6f5780243Ac4a784C5Fc6"
    return(
        <div>
            test
        </div>
    )
}


export default Campaign;