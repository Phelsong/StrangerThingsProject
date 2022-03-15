import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NoMatch,
} from "react-router-dom";
import { Main, TopNavBar, SideBar, ListView, InputForm, Login, ControlBar, Account } from "./components";
import { index } from "./api";
import { useState } from "react";


// const [mainApp, setMainApp] = useState ('') 
const App = () => {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')





  return (
 
    <Router>
     <TopNavBar />
      <SideBar /> 
    
     <Switch>
     <Route path="/InputForm" component={InputForm} />
     <Route path="/ListView"component={ListView} />
     <Route path="/Login" component={Login} /> 
    </Switch>

  

      </Router>

  );
};

ReactDom.render(<App />, document.getElementById("app"));


// () => <Login setUserName={setUserName} setPassword={setPassword} />