import {useLocation} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import contractABI from './abi_export.json';
import bytecode from './bytecode_export.json';
import React, {useState, useEffect} from 'react';
import { parse } from 'ethers/utils/transaction';



function Campaign() {
    let cookie = useCookies(['userCookie'])[0];
    let pathName = useLocation().pathname;
    let indexOfCampaign = pathName[pathName.length-1];
    let ethers = require("ethers");
    let provider = ethers.getDefaultProvider("goerli");
    let sessionData = cookie["json"];
    let privateKey = sessionData.signingKey.privateKey;
    const wallet = new ethers.Wallet(privateKey, provider);
    
    let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
    let [ethersForCampaign, setRaised] = useState(0);
    
    //let contract = await factory.attach('0x7801F210A7d7Ae7Ad6cdE297C19507Cfb0a12396');
  
    let currCampaign;
    let [creator, setCreator] = useState('');
    let [title, setTitle] = useState('');
    let [goal, setGoal] = useState(0);
    let [max, setMax] = useState(0);
    let [type, setType] = useState('');
    let [image, setImage] = useState('');
    let percentComplete = 0;

    // console.log(creator, title, goal, maxDonation, fundraiserType);
    
    let [ether, setEther] = useState('');
    
    let [contract, setContract] = useState('');
    let initializePage = async ()=>{
        let initializedContract = await factory.attach('0x1B9Be7Cf4d80806bB15B3C005A04a5bF24c450E7');
        
        let bal = await provider.getBalance("0x1B9Be7Cf4d80806bB15B3C005A04a5bF24c450E7");
        console.log(Number(bal));
        currCampaign = await initializedContract.getCampaign(indexOfCampaign); //0x42e47FE05B07A65880aa7b0452BDC4F6Da58ba28
        setCreator(currCampaign[0]);
        //if(creator === "0x0000000000000000000000000000000000000000")
        // console.log(creator);
        setTitle(currCampaign[1]);
        setImage(currCampaign[6]);
        setType(currCampaign[4]);
        console.log(currCampaign[6]);
        let rawEtherRaised = currCampaign[5];
        setRaised(Number(rawEtherRaised) / 1E18);
        setGoal(Number(currCampaign[2]) / 1E18);
        setMax(Number(currCampaign[3]) / 1E18);
        setContract(initializedContract);
        percentComplete = ""+(ethersForCampaign / goal) * 100+"%";
        console.log("raised", ethersForCampaign);

        console.log("goal: ", goal); 
    }

    //quintillion = 1E18
    

    
    useEffect(()=>{
        initializePage();

    }, [1]);
    return(
        (contract !== '') ? (<div className="card" id="donate-section">
        <div class="alert alert-success" id="login-success-info">Successfully accessed wallet.</div>
        <div class="alert alert-danger" id="login-incorrect-info">The mnemonic entered is incorrect. Please try another mnemonic, or if you don't have an account, <a href="/register">create a new wallet.</a></div>
        <div class="alert alert-danger" id="invalid-info"></div>
        <div className="card-body">
            <h2 id="campaign-title">
                {title}
            </h2>
            <img id="campaign-thumbnail" src={image} />
            <h3 id="campaign-type">
                {type}
            </h3>
            <h3>{ethersForCampaign} out of {goal} ethers raised</h3>
            
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: 100}} aria-valuenow={parseInt(percentComplete)} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div id="donate-ether">
                <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" onClick={async ()=>{
                    if(contract && ether >= 0 && ether <= max){
                        console.log(contract); //contract exists.
                        console.log(wallet.address); //wallet address is valid. check for transactions at that address.
                        await contract.donate(indexOfCampaign, {
                            value: ethers.utils.parseEther(`${ether}`)
                        })
                    }
                }}>Donate</button>

                <input className="form-control" id="donateField" value={ether} onChange={(e)=>setEther(e.target.value)} placeholder={"Max is " + max + " ether/donation."}/>
            </div> 
            {(wallet.address === creator) ? <button id="end-fundraiser-button" className="btn btn-danger btn-login text-uppercase fw-bold mb-2" onClick={async ()=>{
                    if(contract){
                        console.log(contract.signer);
                        await contract.endFundraiser(indexOfCampaign);
                    }
                }}>End fundraiser</button> : null}
        </div>
    </div>) : <div>Fundraiser is unavailable!</div>
        

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

