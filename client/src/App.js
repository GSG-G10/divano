/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/common/NavBar/NavBar";
import MainHeader from "./components/mainpage/MainHeader";
import ProductDetails from "./components/ProductDetails";

const theme = createTheme({
  palette: {
    primary: {
      //darkBlue
      main: "#04263F",
    },
    secondary: {
      //Brown
      main: "#99580B",
    },
  },
});

function App() {
  // const [navBackground, setNavBackground] = useState("transparent");
  // const [username, setUsername] = useState("");
  // const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          {/* <NavBar
            username={'username'}
            cartCount={'cartCount'}
            navBackground={navBackground}
          /> */}
          <Switch>
            <Route exact path="/">
              <MainHeader  />
            </Route>
            <Route exact path="/funiture"><ProductDetails/></Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
