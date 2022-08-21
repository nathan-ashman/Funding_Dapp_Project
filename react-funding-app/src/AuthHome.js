import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import CampaignLoadout from "./CampaignLoadout";
import contractABI from './abi_export.json';
import bytecode from './bytecode_export.json';
function AuthHome() {
    let ethers = require("ethers");
    let navigate = useNavigate();
    let cookie = useCookies(['userCookie'])[0];
    let sessionData = cookie.json;
    let privateKey = sessionData.signingKey.privateKey;
    let provider = new ethers.getDefaultProvider("goerli");
    let wallet = new ethers.Wallet(privateKey, provider);
    let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
    let contract;
    let [campaignList, setList] = useState('');
    let getCampaignList = async ()=>{
        contract = await factory.attach('0x381A0E758B46b27e34B660a86187ea72DE70446b');
        setList(await contract.getList());
        console.log(campaignList);

    }
    useEffect(()=>{ 
        getCampaignList();
    }, [1]);

    return(
        <div className="dapp-background" onLoad={()=>{
            // if(window.localStorage["JSON"] !== null && window.localStorage["JSON"] !== undefined){
            //     document.querySelector("#login-success-info").style.display = "block";
            // }
        }}>
            {(campaignList !== undefined && campaignList !== null) ? <CampaignLoadout list={campaignList} /> : 
                <>
                    <h2>There are no recent campaigns...</h2>
                    <button className="btn btn-info fw-bold mb-2" onClick={()=>navigate('/create-campaign')}>Create a new campaign</button>
                </>
            }
            {/* <>
                <h2>There are no recent campaigns...</h2>
                <button className="btn btn-info fw-bold mb-2" onClick={()=>navigate('/create-campaign')}>Create a new campaign</button>
            </> */}
        </div>
    )
}


export default AuthHome;