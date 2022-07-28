import { Link as A } from 'react-router-dom';

const Link = ({ name, url }) => {
    return (
        <li className="nav-item">
            <A className="nav-link dapp-links" to={`/${url}`}>
                {name}
            </A>
        </li>
    );
}

export default Link;