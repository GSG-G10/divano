/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from "react";
import "antd/dist/antd.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import "./App.css";

function App() {
  
  const [active,setActive] = useState("");
  const [headerBackround, setHeaderBackground] = useState('')
  return (
    <div>
      <Login active={active} setActive={setActive}/>
      <button onClick={() => setActive("active")}>Hello Ahmad</button>
    </div>
  );
}

export default App;
