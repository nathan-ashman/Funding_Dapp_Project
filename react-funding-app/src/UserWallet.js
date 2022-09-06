import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';



function UserWallet() {
    let ethers = require("ethers");
    
    let cookie = useCookies(['userCookie'])[0];
    
    let provider = ethers.getDefaultProvider("goerli");
    let sessionData = cookie["json"];
    let privateKey = sessionData.signingKey.privateKey;
    let wallet = new ethers.Wallet(privateKey, provider);


    return(
        <div id="wallet-section">
            
        </div>
    )
}

export default UserWallet;