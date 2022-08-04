import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";


function Header() {
  const [, , removeCookie] = useCookies(['userCookie']);
  let navigate = useNavigate();

    return(
        <nav class="navbar navbar-expand-lg navbar-dark static-top dapp-header">
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
              <li class="nav-item">
                <a class="nav-link dapp-links" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dapp-links" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dapp-links" href="/create-campaign">Create new campaign</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dapp-links" href="" onClick={()=>{
                  removeCookie("json");        
                  navigate('/');
                }}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;