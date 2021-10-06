/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar/NavBar';
import MainHeader from './components/mainpage/MainHeader';

function App() {
  const [navBackground, setNavBackground] = useState('transparent');
  const [username, setUsername] = useState('');
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Router>
        <NavBar username = {username} cartCount = {cartCount} navBackground={navBackground}/>
        <Switch>
          <Route exact path="/">
            <MainHeader setNavBackground={setNavBackground}/>
          </Route>
          <Route exact path="/funiture">

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
