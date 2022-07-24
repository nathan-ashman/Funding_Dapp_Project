import './App.css';
import './Dapp.css';
import './Header';
import Header from './Header';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import GuestHome from './GuestHome';
import Register from './Register';
import Login from './Login';
function App() {
  return (

    <div className="App">
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<GuestHome/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
