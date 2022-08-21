import './App.css';
import './Dapp.css';
import './Header';
import Header from './Header';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import CreateCampaign from './CreateCampaign';
import {useLocation} from 'react-router-dom';
import CampaignPage from './CampaignPage';

function App() {
  
    return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create-campaign" element={<CreateCampaign/>} />
          <Route path="/campaign/:id"  element={<CampaignPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
