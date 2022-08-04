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

function App() {
    return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/home" element={<AuthHome/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create-campaign" element={<CreateCampaign/>}/>
          {/* <Route path="/logout"/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
