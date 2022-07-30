import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import classes from './Header.module.css';

const Header = ({ navLinks }) => {
    return (
        <Navbar fixed='top' style={{ backgroundColor: 'rgb(194, 250, 176)' }}>
            <Container>
                <Navbar.Brand href="/">
                    <img src="./purple-moon-logo.webp" alt="..." height="36" />
                    <span className={classes.companyLogo}>AshFund</span>
                </Navbar.Brand>
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/register" style={{ color: 'rgb(152, 28, 224)' }}>
                                Register
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login" style={{ color: 'rgb(152, 28, 224)' }}>
                                Log In
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        /* <nav className="navbar navbar-expand-lg navbar-dark static-top dapp-header">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="./purple-moon-logo.webp" alt="..." height="36" />
                    <span className="company">AshFund</span>
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