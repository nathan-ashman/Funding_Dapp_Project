import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import contractABI from './abi_export.json';
import bytecode from './bytecode_export.json';
import { create, urlSource } from 'ipfs-http-client';

function CreateCampaign() {
    const ethers = require("ethers");
    const Buffer = require("buffer").Buffer;
    let [title, setTitle] = useState('');
    let [goal, setGoal] = useState('');
    let [maxDonation, setMaxDonation] = useState('');
    let [fundraiserType, setFundraiserType] = useState('');
    let [thumbnail, setThumbnail] = useState('');

    let cookie = useCookies(['userCookie'])[0];
    let navigate = useNavigate();
    // const ipfs = create()

    const fileInput = document.getElementById("thumbnail");
    console.log(fileInput);
        
    
    return(
        
        <div className="fundraiser-form">
            <div class="alert alert-success" id="create-campaign-success">Successfully made fundraiser! Please wait a few moments...</div>
            <div class="alert alert-danger" id="create-campaign-error"></div>
            {/* <div class="alert alert-danger" id="invalid-info"></div> */}
            <h2>Create a New Fundraiser</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="titleInput" placeholder="e.g. St. Jude Fundraiser" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="titleInput">Fundraiser Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" min={1} max={5000} className="form-control" id="goalInput" placeholder="e.g. 4000 ether" value={goal} onChange={(e)=>setGoal(e.target.value)} />
                <label htmlFor="titleInput">Goal</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="maxDonoInput" placeholder="e.g. 200 ether" value={maxDonation} onChange={(e)=>setMaxDonation(e.target.value)} />
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

            <div className="form-floating mb-3" id="thumbnail-input">
                <label class="form-label" htmlFor="select-thumbnail">Choose a thumbnail for your fundraiser</label>
                <input type="file" class="form-control" id="select-thumbnail" onChange={async (e)=>{
                    
                    let files = e.target.files;
                    let selected = files[0];
                    console.log(selected);
                    const ipfs = create('http://localhost:5001');
                    const resultFile = await ipfs.add(selected);
                    const url = `https://ipfs.io/ipfs/${resultFile.path}`                    
                    setThumbnail(url);
                }}/>
                
            </div>

            <div className="d-grid">
            <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={async ()=>{
                let invalidMsg = document.querySelector("#login-invalid-info");
                let successMsg = document.querySelector("#login-success-info");
                let provider = ethers.getDefaultProvider("goerli");
                let sessionData = cookie["json"];
                let privateKey = sessionData.signingKey.privateKey;
                let wallet = new ethers.Wallet(privateKey, provider);
                console.log(wallet);
                let factory = new ethers.ContractFactory(contractABI, bytecode, wallet);
                console.log(factory);
                let contract = await factory.attach('0x1B9Be7Cf4d80806bB15B3C005A04a5bF24c450E7');
                console.log(contract);
                let arr = await contract.getList();
                let oldIndex = arr.length-1;
                await contract.makeCampaign(wallet.address, title, ethers.utils.parseEther(goal), ethers.utils.parseEther(maxDonation), fundraiserType, thumbnail).then(res=>{
                    console.log(res);
                }, (err)=>{
                    console.log(err.reason);
                });
                console.log(contract);
                let newCampaign = await contract.getCampaign(oldIndex+1);
                if(contract && arr.length > 0 && newCampaign !== undefined){
                    navigate(`/campaign/${arr.length-1}`);
                }

            }}>Create my fundraiser</button>
        </div>
        </div>
    )
}

export default CreateCampaign;