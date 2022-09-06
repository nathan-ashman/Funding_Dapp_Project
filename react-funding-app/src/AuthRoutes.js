import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
import { ethers } from "ethers";

import {useEffect, useState} from "react";


function AuthRoutes() {
const [cookie, , removeCookie] = useCookies(['userCookie']);
  let navigate = useNavigate();
  let sessionData = cookie["json"];
  let provider = ethers.getDefaultProvider("goerli");
    let [userBalance, setBalance] = useState(0);
  console.log(sessionData);
  let userAddress = sessionData.signingKey.address;
  let getUserBalance = async ()=>{
    let rawValue = await provider.getBalance(userAddress);
    let parsedValue = Number(rawValue / 1E18);
    setBalance(parsedValue.toFixed(3));
  };

  useEffect(()=>{
    getUserBalance();
  }, [1]);
  
    return(
        <>
            <li class="nav-item" id="user-balance">
                <h4 class="nav-link dapp-links">Welcome, {userAddress}. Your balance is: {userBalance}</h4>
            </li>
            <li class="nav-item">
                <a class="nav-link active dapp-links" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link dapp-links" href="/create-campaign">Create new campaign</a>
            </li>
            <li class="nav-item">
                <a class="nav-link dapp-links" href="/faucet">Get Ether</a>
            </li>
            <li class="nav-item">
                <a class="nav-link dapp-links" href="" onClick={() => {
                    removeCookie("json");
                    if(!cookie.json) navigate('/');
                }}>Logout</a>
            </li>
        </>
    )
}

export default AuthRoutes;