import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';


function RegisterUser() {
    
    
}

function Register() {

    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPassword, setRepeatPassword] = useState('');
    let navigate = useNavigate();
    
    
    

    
    return(
        <>
            <div class="alert alert-danger" id="invalid-info"></div>
            <form className="reg-login-form">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="user" placeholder="jimmyjones123" minlength="4" maxlength="8" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" minlength="6" maxlength="8" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="repeatPassword" placeholder="Confirm Password" minlength="6" maxlength="8" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={() => {
                   let atIndex = email.indexOf("@");
                   let dotIndex = email.indexOf(".");
                   let name = email.substring(0, atIndex);
                   let domain = email.substring(atIndex, dotIndex);
                   let topLevelDomain = email.substring(dotIndex+1);
                   let isValidEmail = (name && domain && topLevelDomain); 
                   let isValidPassword = password.length >= 6 && password.length <= 8;
                   let isValidRepeatPassword = password === repeatPassword;
                   let invalidMsg = document.querySelector("#login-invalid-info");
                   
                   if(isValidEmail == false || isValidPassword == false || isValidRepeatPassword == false){

                    invalidMsg.style.display = "block";
            
                    if(!isValidEmail) invalidMsg.innerHTML = "Invalid email.";
                    else if(isValidPassword == false) invalidMsg.innerHTML = "Invalid password.";
                    else if(isValidRepeatPassword == false) invalidMsg.innerHTML = "Passwords do not match.";
                }
                   
                   if (email !== null && password !== null && username !== null && repeatPassword !== null) {
                        navigate('/login');
                    }
                }}>Register</button>



            </form>

        </>
        
    )
}


export default Register;