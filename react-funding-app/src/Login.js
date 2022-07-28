import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';


function Login() {
    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    // let emailRegex = new RegExp('\w+@[a-z]+.\w{2,3}','g');
    // let passwordRegex = new RegExp('\w{6,8}','g');
    // let [cookies, setCookie] = useCookies(['usercookie']);
    let navigate = useNavigate();
    
    // setCookie('user', {test: 'test'}, {path: '/'});

    return (
    <>
        <div class="alert alert-danger" id="login-incorrect-info">The email or password entered is incorrect. Please try another password or email, or if you don't have an account, <a href="/register">register.</a></div>
        <div class="alert alert-danger" id="login-invalid-info"></div>
        {/* "invalid email address" or "password is too short" */}

        <form className="reg-login-form">
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" minlength="6" maxlength="8" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                Remember password
            </label>
        </div>

        <div className="d-grid">
            <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={()=>{
            let atIndex = email.indexOf("@");
            let dotIndex = email.indexOf(".");
            let name = email.substring(0, atIndex);
            let domain = email.substring(atIndex, dotIndex);
            let topLevelDomain = email.substring(dotIndex+1);
            let isValidEmail = (name && domain && topLevelDomain); 
            let isValidPassword = password.length >= 6 && password.length <= 8;
            let invalidMsg = document.querySelector("#login-invalid-info");
            if(isValidEmail == false || isValidPassword == false){

                invalidMsg.style.display = "block";

                if(!isValidEmail) invalidMsg.innerHTML = "Invalid email.";
                else if(isValidPassword == false) invalidMsg.innerHTML = "Invalid password.";

            }
            
            if (isValidEmail && isValidPassword){
                navigate('/');
            }else {
                console.log(isValidEmail, isValidPassword);
            }
        }}>Sign in</button>
            <div className="text-center">
                <a className="small" href="#">Forgot password?</a>
            </div>
        </div>

    </form>
    </>

    )
}

/**
 
 */

export default Login;