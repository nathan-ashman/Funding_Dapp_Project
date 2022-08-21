import React, {useState, useEffect} from 'react';
import Campaign from './Campaign';

function CampaignLoadout(props) {
    let list = props.list;
    console.log(list);
    let testArr = [0,1,2,3,4];
    let mappedCampaigns = list.map((campaign, index)=>{
        let _max = Number(campaign[3]) / 1E18;
        let _goal = Number(campaign[2]) / 1E18;
        return (
            <li>
                <Campaign id={index} title={campaign[1]} goal={_goal} max={_max} type={campaign[4]}/>
            </li>)
    });
    return(
        /*
            setCreator(currCampaign[0]);
        console.log(creator);
        setTitle(currCampaign[1]);
        setGoal(Number(currCampaign[2]) / 1E18);
        setMax(Number(currCampaign[3]) / 1E18);
        setType(currCampaign[4]);
        ethersForCampaign = await contract.getEther(indexOfCampaign);
        */
        <ul id="campaign-list">
            {mappedCampaigns}
        </ul>
    )

}

export default CampaignLoadout;