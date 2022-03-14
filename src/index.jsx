import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NoMatch,
} from "react-router-dom";
import { Main, TopNavBar, SideBar } from "./components";
import { ListView, InputForm, Login, ControlBar, Account } from "./components";
import { useState } from "react/cjs/react.production.min";


// const [mainApp, setMainApp] = useState ('') 
const App = () => {
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
