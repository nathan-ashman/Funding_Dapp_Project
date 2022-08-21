import {useLocation} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import contractABI from './abi_export.json';
import bytecode from './bytecode_export.json';
import React, {useState, useEffect} from 'react';



function Campaign() {
    let cookie = useCookies(['userCookie'])[0];
    let pathName = useLocation().pathname;
    let indexOfCampaign = pathName[pathName.length-1];
    let ethers = require("ethers");
    let provider = ethers.getDefaultProvider("goerli");
    let sessionData = cookie["json"];
    let privateKey = sessionData.signingKey.privateKey;
    let wallet = new ethers.Wallet(privateKey, provider);
    let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
    let ethersForCampaign;
    
    //let contract = await factory.attach('0x7801F210A7d7Ae7Ad6cdE297C19507Cfb0a12396');
 
    let currCampaign;
    let [creator, setCreator] = useState('');
    let [title, setTitle] = useState('');
    let [goal, setGoal] = useState('');
    let [max, setMax] = useState('');
    let [type, setType] = useState('');

    // console.log(creator, title, goal, maxDonation, fundraiserType);
    
    let [ether, setEther] = useState('');
    let [contract, setContract] = useState('');
    
    let initializePage = async ()=>{
        contract = await factory.attach('0x381A0E758B46b27e34B660a86187ea72DE70446b');
        setContract(contract);
        currCampaign = await contract.getCampaign(indexOfCampaign);
        console.log(contract);
        setCreator(currCampaign[0]);
        console.log(creator);
        setTitle(currCampaign[1]);
        setGoal(Number(currCampaign[2]) / 1E18);
        setMax(Number(currCampaign[3]) / 1E18);
        setType(currCampaign[4]);
        ethersForCampaign = await contract.getEther(indexOfCampaign);
    }

    //contract address: 0x381A0E758B46b27e34B660a86187ea72DE70446b
    // (async ()=>{
    // })();


    // let [campaignName, campaignType, campaignGoal, campaignMaxDonation];
    
    

    //quintillion = 1E18
    // console.log(campaignGoal, campaignMaxDonation);
    // console.log(campaignName, campaignType);
    // document.querySelector("campaign-title").innerHTML = `Title: ${campaignName}`;
    // console.log(campaignContract); //"0x81531566165Decd0E5D6f5780243Ac4a784C5Fc6"
    useEffect(()=>{
        initializePage();
    }, [1]);
    return(
        <div className="card" id="donate-section">
            <div className="card-body">
                <h2 id="campaign-title" >
                    {title}
                </h2>
                <h3 id="campaign-type">
                    {type}
                    {goal}
                </h3>
                {/**
                 * <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                 */}
                <div id="donate-ether">
                    <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" onClick={async ()=>{
                        console.log(contract);
                        if(contract){
                            await contract.donate(indexOfCampaign, {
                                value: ethers.utils.parseEther(ether)
                            }).then((res)=>console.log(res));
                    
                        }
                    }}>Donate</button>

                    <button onClick={async ()=>{
                        if(contract){
                            await contract.endFundraiser(indexOfCampaign, {
                                from: {creator}
                            }).then((res)=>console.log(res));
                        }
                    }}>End fundraiser</button>

                    <input className="form-control" id="donateField" value={ether} onChange={(e)=>setEther(e.target.value)}/>
                </div>

            </div>
        </div>

        /*
            <div className="form-floating mb-3">
                    <h3 id="form-title">Create a new wallet</h3>
                </div>
                <div className="form-floating mb-3">                    
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" minLength="6" maxLength="8" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
        */


    )
}


export default Campaign;