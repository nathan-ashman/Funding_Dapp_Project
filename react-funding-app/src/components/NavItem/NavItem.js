import { Link as A } from 'react-router-dom';
import classes from './NavItem.module.css';
import Nav from 'react-bootstrap/Nav';

const NavItem = ({ name, url }) => {
    return (
        <Nav.Item>
            <Nav.Link href={`/${url}`} style={{ color: 'rgb(152, 28, 224)' }}>
                {name}
            </Nav.Link>
        </Nav.Item>

        /* <li className="nav-item">
            <A className='nav-link dapp-links' to={`/${url}`}>
                {name}
            </A>
        </li> */
    );
}

export default NavItem;