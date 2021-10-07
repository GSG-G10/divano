/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from "react";
import "antd/dist/antd.css";
import {BrowserRouter as Router} from "react-router-dom";
import Signup from "./components/Signup";
import MainHeader from './components/mainpage/MainHeader';
import "./App.css";

function App() {
  
  const [active,setActive] = useState("");
  return (
  <Router>
    
      
      <div><MainHeader /></div>
      <Signup active={active} setActive={setActive}/>
      <button onClick={() => setActive("active")}>Hello Ahmad</button>
    
    </Router>
  );
}

export default App;
