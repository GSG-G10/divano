/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import NavBar from './components/common/NavBar/NavBar';
import MainHeader from './components/mainpage/MainHeader';
import ProductDetails from './components/ProductDetails';
import Login from "./components/Login";
import "antd/dist/antd.css";
import  Footer  from './components/common/Footer';



const theme = createTheme({
  palette: {
    primary: {
      // darkBlue
      main: '#04263F',
    },
    secondary: {
      // Brown
      main: '#99580B',
    },
  },
});

function App() {
  const [navBackground, setNavBackground] = useState('transparent');
  const [username, setUsername] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [active,setActive] = useState("");
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar
            username={username}
            cartCount={cartCount}
            navBackground={navBackground}
            setActive={setActive}
            active={active}
          />
          <Login active={active} setActive={setActive} />
          <Switch>
            <Route exact path="/">
            <Login active={active} setActive={setActive} />
            </Route>
            <Route exact path="/signup"> 
            
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <MainHeader setNavBackground={setNavBackground} />
            </Route>
            <Route exact path="/funiture" />
          </Switch>
        </ThemeProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;