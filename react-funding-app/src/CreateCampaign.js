import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import contractABI from './abi_export.json';
import bytecode from './bytecode_export.json';
function CreateCampaign() {
    const ethers = require("ethers");
    let [title, setTitle] = useState('');
    let [goal, setGoal] = useState('');
    let [maxDonation, setMaxDonation] = useState('');
    let [fundraiserType, setFundraiserType] = useState('');
    let cookie = useCookies(['userCookie'])[0];
    let navigate = useNavigate();
    return(
        <div className="fundraiser-form">
            <h2>Create a New Fundraiser</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="titleInput" placeholder="e.g. St. Jude Fundraiser" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="titleInput">Fundraiser Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" min={1} max={5000} className="form-control" id="goalInput" placeholder="e.g. 4000 ether" value={goal} onChange={(e)=>setGoal(e.target.value)} />
                <label htmlFor="titleInput">Goal</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="maxDonoInput" placeholder="e.g. 200 ether" value={maxDonation} onChange={(e)=>setMaxDonation(e.target.value)} />
                <label htmlFor="maxDonoInput">Maximum Donation</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="fundTypeInput" placeholder="e.g. Charity" value={fundraiserType} onChange={(e)=>setFundraiserType(e.target.value)} />
                <label htmlFor="fundTypeInput">Fundraiser type</label>
                {/* <select>
                    <option>

                    </option>
                </select> */}
            </div>

            <div className="d-grid">
            <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={async ()=>{
                // let address = "0xE5DD8559dD9c36Fb78a8416f49C5b7bB9129C376";
                // let provider = "https://ropsten.infura.io/v3/e65d405d00974a82aa271e4267deb9ef";
                let provider = ethers.getDefaultProvider("ropsten");
                let sessionData = cookie["json"];
                let privateKey = sessionData.signingKey.privateKey;
                let wallet = new ethers.Wallet(privateKey, provider);
                /*
                    let input = JSON.stringify({
        language: 'Solidity',
        sources: {
            'source_1': {
                content: contractStr
            }
        },
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*']
                }
            }
        }
    }) 
                */
                let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
                let contract = await factory.deploy();
                await contract.makeCampaign(title, goal, maxDonation, fundraiserType);
                console.log(contract); //
                // navigate(`/campaign/${contract.address}`, {state: contract});
                if (contract) navigate(`/campaign/${contract.address}`, {state: {id: JSON.stringify(contract), name: "contract-data"}});
            }}>Create my fundraiser</button>
        </div>
        </div>
    )
}

export default CreateCampaign;