import "./Style.css";
import React from 'react';
import { AppBar, IconButton, Toolbar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { message } from "antd";

function NavBar({ cartCount, navBackground, setActive}) {
  const cookies = document.cookie
  const username = cookies.split('; username=')[1];
  console.log(cookies);
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/v1/logout')
      if (response.status === 200) {
        console.log(response);
        message.success('logged out successfuly')
        window.location.reload(false)
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
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
              <button className={cookies?"hidden":"loginBtn"} onClick={() => setActive('active') }>Log In</button>
              <div className={cookies?"userContainer":"hidden"}>
                <AccountCircleIcon color="secondary"/>
                <span className="userName">{username}</span>
              </div> 
              <div className="cartContainer">
                <IconButton>
                  <ShoppingCartIcon className="cartIcon" />
                </IconButton>
                <span className="counter">{cartCount?cartCount:0}</span>
              </div>
              <div className={cookies?"logout-btn":"hidden"} onClick={handleLogout} >
              <IconButton>
                  <LogoutIcon className="cartIcon" /> <p>Logout</p>
                </IconButton> </div>
            </Toolbar>
          </Toolbar>
        </AppBar>
  );
}

export default NavBar;
