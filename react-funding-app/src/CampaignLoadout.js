import React, {useState, useEffect} from 'react';
import Campaign from './Campaign';

function CampaignLoadout(props) {
    let [list, setList] = useState([]);
    useEffect(()=>{ 
        setList(props.list);
    })
    let mappedCampaigns;
    if(list){
        mappedCampaigns = list.map((campaign, index)=>{
            console.log(campaign);
            let _max = Number(campaign[3]) / 1E18;
            let _goal = Number(campaign[2]) / 1E18;
            let _raised = Number(campaign[5]) / 1E18;
            return (
                <li className='col'>
                    <Campaign id={index} title={campaign[1]} goal={_goal} max={_max} type={campaign[4]} raised={_raised} thumbnail={campaign[6]} creator={campaign[0]}/>
                </li>)
        });
    }
    
    return(
       <ul id="campaign-list" className='row'>
            {mappedCampaigns}
        </ul>
    )

}

export default CampaignLoadout;