/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from "react";
import {BrowserRouter as Router , Route ,Switch} from "react-router-dom"
import "antd/dist/antd.css";
import Signup from "./commponants/Signup";
import PageNotFound from "./commponants/errors/PageNotFound";
import Servererror from "./commponants/errors/Servererror";
import MainHeader from './components/mainpage/MainHeader';
import "./App.css";

function App() {
  const [active,setActive] = useState("");
  return (
    <div>
      <MainHeader />
      <Router>
        <Switch>
        <Route path="/500" ><Servererror /></Route>
        <Route path="/signup"><Signup active={active} setActive={setActive} />
        <button onClick={() => setActive("active")}>Hello Ahmad</button>
        </Route>
  
      <Route ><PageNotFound/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
