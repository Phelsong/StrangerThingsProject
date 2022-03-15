import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NoMatch,
} from "react-router-dom";
import { Main, TopNavBar, SideBar, ListView, InputForm, RegisterUser, Login, ControlBar, Account } from "./components";
import { index } from "./api";
import { useState } from "react";


// const [mainApp, setMainApp] = useState ('') 
const App = () => {
const [token, setToken] = useState('')
const [allPosts, setAllPosts]  = useState(null)




  return (
    
    <Router>
     <TopNavBar />
      <SideBar /> 
     <Switch>
     <Route path="/InputForm" component={InputForm} />
     <Route path="/ListView" component={()=> <ListView  allPosts={allPosts} setAllPosts={setAllPosts}/>} />
     <Route path="/Login" component={() => <Login setToken={setToken} />} />
     <Route path="/RegisterUser" component={() => <RegisterUser setToken={setToken}/>} /> 
    </Switch>

  

      </Router>

  );
};

ReactDom.render(<App />, document.getElementById("app"));


// () => <Login setUserName={setUserName} setPassword={setPassword} />