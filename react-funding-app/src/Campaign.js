import { useNavigate } from 'react-router-dom';

function Campaign(props) {
    let _id = props.id;
    let _title = props.title;
    let _type = props.type;
    let _goal = props.goal;
    let navigate = useNavigate();

    return(
        <div className="card" id="donate-section">
            <div className="card-body">
                <h2 id="campaign-title">
                    {_title}
                </h2>
                <h3 id="campaign-type">{_type}</h3>
                <h3 id="campaign-goal">{_goal}</h3>
                <div>
                    <button id={_id} className="btn btn-success btn-login text-uppercase fw-bold mb-2" onClick={()=>navigate(`/campaign/${_id}`)}>Donate</button>
                </div>
            </div>
        </div>
    )
}

export default Campaign;