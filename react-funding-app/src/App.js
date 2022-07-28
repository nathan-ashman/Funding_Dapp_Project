import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GuestHome from './pages/GuestHome';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import './Dapp.css';
import './components/Header';

function App() {
    const guestLinks = [
        {
            name: 'Register',
            url: 'register'
        },
        {
            name: 'Log In',
            url: 'login'
        }
    ];

    const userLinks = [];

    let navLinks = guestLinks;

    return (
        <div className="App">
            <div className="container-fluid">
                <Header navLinks={navLinks} />
                <Routes>
                    <Route path="/" element={<GuestHome />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
