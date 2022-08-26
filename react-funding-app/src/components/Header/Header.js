import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import classes from './Header.module.css';
import NavItem from '../NavItem/NavItem';
import Link from '../NavItem/NavItem';

const Header = ({ navLinks }) => {
    return (
        <Navbar fixed='top'>
            <Container style={{ backgroundColor: 'rgb(194, 250, 176)' }}>
                <Navbar.Brand href='/'>
                    <img src='./purple-moon-logo.webp' alt='...' height='36' />
                    <span className={classes.companyLogo}>AshFund</span>
                </Navbar.Brand>
                <Navbar.Collapse id='navbarSupportedContent'>
                    <Nav className='ms-auto'>
                        {navLinks.map((link, i) => {
                            return (
                                <NavItem 
                                    key={i.toString()} 
                                    name={link.name} 
                                    url={link.url} 
                                />
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        /* <nav className="navbar navbar-expand-lg navbar-dark static-top dapp-header navBar">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="./purple-moon-logo.webp" alt="..." height="36" />
                    <span className="companyLogo">AshFund</span>
                </a>
                <div 
                    className="collapse navbar-collapse" 
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map((link, i) => {
                            return (
                                <Link 
                                    key={i.toString()} 
                                    name={link.name} 
                                    url={link.url}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav> */
    );
}

export default Header;