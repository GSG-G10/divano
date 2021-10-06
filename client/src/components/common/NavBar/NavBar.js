import "./Style.css";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar({username, cartCount, navBackground}) {
  return (
        <AppBar color={navBackground} position="absolute">
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
                <Link to="/funiture" className="listItem">
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
              <button className={username?"hidden":"loginBtn"}>Log In</button>
              <div className={username?"userContainer":"hidden"}>
                <AccountCircleIcon color="secondary"/>
                <span className="userName">{username}</span>
              </div> 
              <div className="cartContainer">
                <IconButton>
                  <ShoppingCartIcon className="cartIcon" />
                </IconButton>
                <span className="counter">{cartCount?cartCount:0}</span>
              </div>
            </Toolbar>
          </Toolbar>
        </AppBar>
  );
}

export default NavBar;
