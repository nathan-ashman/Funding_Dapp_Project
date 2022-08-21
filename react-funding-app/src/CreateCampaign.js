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
    /*
        logic for adding image to ipfs

        let acceptedFileTypes = ['jpg', 'jpeg', 'png'];
        const reader = new FileReader();
        reader.onloadend = function() {

        const ipfs = ipfsAPI('localhost', 5001);
        const buf = buffer.Buffer

        (reader.result);

        ipfs.files.add(buf, (err, result) => {

        if(err) {
            showError("Something went wrong when trying to upload the photo.");

            return; 
        }
        let imageHash = result[0].hash;

        }

        }
    */
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
                let provider = ethers.getDefaultProvider("goerli");
                let sessionData = cookie["json"];
                let privateKey = sessionData.signingKey.privateKey;
                let wallet = new ethers.Wallet(privateKey, provider);
                console.log(wallet);
                let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
                console.log(factory);
                let contract = await factory.attach('0x381A0E758B46b27e34B660a86187ea72DE70446b');
                console.log(contract);
                await contract.makeCampaign(wallet.address, title, goal, maxDonation, fundraiserType);
                console.log(contract);
                let arr = await contract.getList();
                if(contract && arr.length > 0){
                    
                let mostRecentCampaign = arr[arr.length-1];
                
                console.log(mostRecentCampaign);
                
                navigate(`/campaign/${arr.length-1}`);
                } 

                // if (contract) navigate(`/campaign/${}`, {state: {id: JSON.stringify(contract), name: "contract-data"}});
            }}>Create my fundraiser</button>
        </div>
        </div>
    )
}

export default CreateCampaign;