import Link from './Link/Link';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ navLinks }) => {
    return (
        <Navbar fixed='top' style={{ backgroundColor: rgb(194, 250, 176) }} />
        
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