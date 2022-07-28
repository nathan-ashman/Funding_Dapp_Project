import Button from 'react-bootstrap/Button'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark static-top dapp-header">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./purple-moon-logo.webp" alt="..." height="36" />
                    <span class="company">AshFund</span>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Button
                            as="a"  
                            className="nav-link dapp-links" 
                            href="/"
                            >
                                Home
                            </Button>
                        </li>
                        <li class="nav-item">
                            <Button 
                            as="a"
                            class="nav-link dapp-links" 
                            href="/register">
                                Register
                            </Button>
                        </li>
                        <li class="nav-item">
                            <Button
                            as="a" 
                            class="nav-link dapp-links" 
                            href="/login"
                            >
                                Login
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;