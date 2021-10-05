import "./Style.css";
import { AppBar, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

function NavBar({username}) {
  return (
      <ThemeProvider theme={theme}>
        <AppBar color="transparent">
          <Toolbar>
            <Link to="/" className="logo">
              Divano
            </Link>
            <ul className="navList">
              <li>
                <Link to="/" className="listItem active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="listItem">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/" className="listItem">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="listItem">
                  Contact us
                </Link>
              </li>
            </ul>
            <Toolbar className="navBtns">
              <button className="loginBtn">Log In</button>
              <div className="userContainer hidden">
                <AccountCircleIcon color="secondary"/>
                <span className="userName">{username}</span>
              </div> 
              <div className="cartContainer">
                <ShoppingCartIcon className="cartIcon" />
                <span className="counter">0</span>
              </div>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
  );
}

export default NavBar;
