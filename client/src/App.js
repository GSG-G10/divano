/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from "react";
import "antd/dist/antd.css";
import Signup from "./commponants/Signup";
import MainHeader from './components/mainpage/MainHeader';
import "./App.css";

function App() {
  
  const [active,setActive] = useState("");
  return (
    <div>
      <MainHeader />
      <Signup active={active} setActive={setActive}/>
      <button onClick={() => setActive("active")}>Hello Ahmad</button>
    </div>
  );
}

export default App;
