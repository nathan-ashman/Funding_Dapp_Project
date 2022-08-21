import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';


function Register() {
    const ethers = require("ethers");
    // let [email, setEmail] = useState('');
    // let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPassword, setRepeatPassword] = useState('');
    let navigate = useNavigate();
    
    
    

    
    return(
        <>
            <div class="alert alert-danger" id="invalid-info"></div>
            <div class="alert alert-success" id="mnemonic-info">Save the following mnemonic: </div>

            <div className="reg-login-form">
                <div className="form-floating mb-3">
                    <h3 id="form-title">Create a new wallet</h3>
                </div>
                <div className="form-floating mb-3">                    
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" minLength="6" maxLength="8" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="repeatPassword" placeholder="Confirm Password" minLength="6" maxLength="8" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={() => {
                //    let atIndex = email.indexOf("@");
                //    let dotIndex = email.indexOf(".");
                //    let name = email.substring(0, atIndex);
                //    let domain = email.substring(atIndex, dotIndex);
                //    let topLevelDomain = email.substring(dotIndex+1);
                //    let isValidEmail = (name && domain && topLevelDomain); 
                   let isValidPassword = password.length >= 6 && password.length <= 8;
                   let isValidRepeatPassword = password === repeatPassword;
                   let invalidMsg = document.querySelector("#invalid-info");
                    let mnemonicMsg = document.querySelector("#mnemonic-info");
                   //registering

                    if(isValidPassword === false || isValidRepeatPassword === false){

                    invalidMsg.style.display = "block";
            
                    if(isValidPassword === false) invalidMsg.innerHTML = "Invalid password.";
                    else if(isValidRepeatPassword === false) invalidMsg.innerHTML = "Passwords do not match.";
                } else {
                    let randNum = Math.random();
                    let randomWallet = ethers.Wallet.createRandom([password, randNum]);
                    console.log(randomWallet);
                    let mnemonic = randomWallet.signingKey.mnemonic;
                    mnemonicMsg.innerHTML = mnemonic;
                    invalidMsg.style.display = "none";
                    mnemonicMsg.style.display = "block";
                }
                   
                //    if (email !== null && password !== null && username !== null && repeatPassword !== null) {
                //         navigate('/login');
                //     }


                }}>Create wallet</button> <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" onClick={()=>{
                    navigate('/login');
                }}>Go to open wallet</button>
            </div>

        </>
        
    )
}


export default Register;