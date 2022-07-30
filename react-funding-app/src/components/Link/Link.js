import { Link as A } from 'react-router-dom';
import classes from './Link.module.css';

const Link = ({ name, url }) => {
    return (
        <li className="nav-item">
            <A className='nav-link' to={`/${url}`}>
                {name}
            </A>
        </li>
    );
}

export default Link;