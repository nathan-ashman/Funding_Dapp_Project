import { useNavigate } from "react-router-dom";

function AuthHome() {
    let navigate = useNavigate();

    return(
        <div className="dapp-header" onLoad={()=>{
            if(window.localStorage["JSON"] !== null && window.localStorage["JSON"] !== undefined){
                document.querySelector("#login-success-info").style.display = "block";
            }
        }}>
            <h2>There are no recent campaigns...</h2>
            <button className="btn btn-info fw-bold mb-2" onClick={()=>navigate('/create-campaign')}>Create a new campaign</button>
            {/* <div class="row">
                <div class="alert alert-success" id="login-success-info">Successfully accessed wallet.</div>
                <div class="col">
                    <img id="guest-img" class="rounded float-left" src="https://tinyurl.com/2p8fw6nb" alt="" />
                </div>
                <div id="welcome-text" class="col">
                    <h2>Welcome to AshFund! To get started with a campaign, please login or register.</h2>
                </div>
            </div> */}
        </div>
    )
}


export default AuthHome;