import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';

function CreateCampaign() {
    const ethers = require("ethers");
    let [title, setTitle] = useState('');
    let [goal, setGoal] = useState('');
    let [maxDonation, setMaxDonation] = useState('');
    let [fundraiserType, setFundraiserType] = useState('');
    return(
        <div className="fundraiser-form">
            <h2>Create a New Fundraiser</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="titleInput" placeholder="e.g. St. Jude Fundraiser" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="titleInput">Fundraiser Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" min={1} max={50000} className="form-control" id="goalInput" placeholder="e.g. 4000 ether" value={goal} onChange={(e)=>setGoal(e.target.value)} />
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
        </div>
    )
}

export default CreateCampaign;