import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';


function AuthRoutes() {
const [, , removeCookie] = useCookies(['userCookie']);
  let navigate = useNavigate();
    return(
        <>
            <li class="nav-item">
                <a class="nav-link dapp-links" href="/create-campaign">Create new campaign</a>
            </li>
            <li class="nav-item">
                <a class="nav-link dapp-links" href="" onClick={() => {
                    removeCookie("json");
                    navigate('/');
                }}>Logout</a>
            </li>
        </>
    )
}

export default AuthRoutes;