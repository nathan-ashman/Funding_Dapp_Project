import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import bytecode from './bytecode_export.json';
import contractABI from './abi_export.json';

function Campaign(props) {
    let ethers = require("ethers");
    let provider = ethers.getDefaultProvider("goerli");
    let cookie = useCookies(['userCookie'])[0];
    let _id = props.id;
    let _title = props.title;
    let _creator = props.creator;
    let _type = props.type;
    let _goal = props.goal;
    let _raised = props.raised;
    let _thumbnail = props.thumbnail;
    let sessionData = cookie.json;
    let walletAddress = sessionData.signingKey.address;
    let privateKey = sessionData.signingKey.privateKey;
    let walletSigner = new ethers.Wallet(privateKey, provider);
    let factory = new ethers.ContractFactory(contractABI, bytecode, walletSigner);
    let contract = factory.attach("0x1B9Be7Cf4d80806bB15B3C005A04a5bF24c450E7");
    let navigate = useNavigate();
    
    return(
        <div className="card" id="donate-section">
            <div className="card-body">
                <img id="campaign-thumbnail" src={_thumbnail}/>
                <h2 id="campaign-title">
                    {_title}
                </h2>
                <h3 id="campaign-type">{_type}</h3>
                <h3 id="campaign-goal">{_raised} out of {_goal}</h3>
                
                <div>
                    <button id={_id} className="btn btn-success btn-login text-uppercase fw-bold mb-2" onClick={()=>navigate(`/campaign/${_id}`)}>Donate</button>
                    
                </div>
                <h6 className='text-muted' id="campaign-creator">Created by: {_creator}</h6>
                {(walletAddress === _creator) ? <button id="end-fundraiser-button" className="btn btn-danger btn-login text-uppercase fw-bold mb-2" onClick={async ()=>{
                    if(contract){
                        await contract.endFundraiser(_id);
                    }
                }}>End fundraiser</button> : null}
            </div>
        </div>
    )
}

export default Campaign;