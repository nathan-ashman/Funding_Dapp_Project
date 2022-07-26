import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import { providers } from "ethers";


function Login() {
    const ethers = require("ethers");
    let [mnemonic, setMnemonic] = useState('');
    let [password, setPassword] = useState('');
    // let emailRegex = new RegExp('\w+@[a-z]+.\w{2,3}','g');
    // let passwordRegex = new RegExp('\w{6,8}','g');
    const [cookies, setCookie, removeCookie] = useCookies(['userCookie']);
    const provider = ethers.getDefaultProvider("goerli");
    let navigate = useNavigate();
    

    return (
    <>
        <div class="alert alert-success" id="login-success-info">Successfully accessed wallet.</div>
        <div class="alert alert-danger" id="login-incorrect-info">The mnemonic entered is incorrect. Please try another mnemonic, or if you don't have an account, <a href="/register">create a new wallet.</a></div>
        <div class="alert alert-danger" id="invalid-info"></div>

        <div className="reg-login-form">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="mnemonicInput" placeholder="Enter your wallet mnemonic" value={mnemonic} onChange={(e)=>setMnemonic(e.target.value)} />
            <label htmlFor="mnemonicInput">Mnemonic</label>
        </div>

        <div className="d-grid">
            <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={async ()=>{
    
            let invalidMsg = document.querySelector("#login-invalid-info");
            let successMsg = document.querySelector("#login-success-info");

            let inputtedMnemonic = document.querySelector("#mnemonicInput").value;
            // const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
            // const signer = provider.getSigner();
            //logging in
            
            let authWallet = ethers.Wallet.fromMnemonic(inputtedMnemonic);
            console.log(authWallet);
            if(authWallet !== undefined){
                
                let walletAddress = authWallet.address;

                let rawEther = await provider.getBalance(walletAddress);
                let walletBalance = Number(rawEther) / 1E18;
                setCookie('json', JSON.stringify(authWallet), {path: '/'});
                if(walletBalance === 0) navigate('/faucet')
                else navigate('/');
                window.location.reload();
            } else {
                console.log("Unknown error.")    
            }
            

        }}>Open my wallet</button>
        </div>

    </div>
    </>

    )
}

/**
 
 */

export default Login;