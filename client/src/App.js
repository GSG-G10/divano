/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import MainHeader from "./components/mainpage/MainHeader";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/errors/PageNotFound";
import Servererror from "./components/errors/Servererror";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Whoweare from './components/Whoweare';
import Productslider from './components/Productslider';
import Cart from "./pages/cart/cart";
import "antd/dist/antd.css";
import  Footer  from './components/common/Footer';
import "./App.css";
import Furniture from './pages/Furniture.js'
const theme = createTheme({
  palette: {
    primary: {
      // darkBlue
      main: "#04263F",
    },
    secondary: {
      // Brown
      main: "#99580B",
    },
  },
});

function App() {
  const [navBackground, setNavBackground] = useState("transparent");
  const [username, setUsername] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [active, setActive] = useState("");
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
              <Signup active={active} setActive={setActive} />
            </Route>
            <Route exact path="/signup"></Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <MainHeader setNavBackground={setNavBackground} />
               <Productslider/>
               <Whoweare />
            </Route>
            <Route exact path="/funiture"><Furniture setNavBackground={setNavBackground}/></Route>
            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route path="/500">
              <Servererror />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </ThemeProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
