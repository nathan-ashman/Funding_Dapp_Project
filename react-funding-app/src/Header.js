import {useCookies} from 'react-cookie';
import GuestRoutes from './GuestRoutes';
import AuthRoutes from './AuthRoutes';
import React, {useState, useEffect} from 'react';

function Header() {
  const cookie = useCookies(['userCookie'])[0];
  let [isLoggedIn, setLoginStatus] = useState(false);
  function checkLoginStatus() {
    if(cookie.json !== undefined) setLoginStatus(true);
  }
  useEffect(()=>{
    checkLoginStatus();
  }, [1])

  return(
        <nav class="navbar navbar-expand-lg navbar-dark static-top dapp-background">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./purple-moon-logo.webp" alt="..." height="36" />
            <span class="company">AshFund</span>
          </a>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active dapp-links" aria-current="page" href="/">Home</a>
              </li>
              {isLoggedIn === true ? <AuthRoutes /> : <GuestRoutes />}              

            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;