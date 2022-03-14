import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";
import { Main, TopNavBar, SideBar } from "./components";
import { ListView, InputForm, Login } from "./components"


const App = () => {
return (
  <Router>

    {/* <Link to="../MainWindow/ListView.jsx"> Logo </Link> */}
    <TopNavBar />
    <SideBar />
      <Main /> 
     <Switch>
      <Route exact path="./components/MainWindow/ListView.jsx">
        <ListView />
      </Route>
      <Route exact path="./components/MainWindow/InputForm.jsx">
        <InputForm />
      </Route>
      <Route exact path="./components/MainWindow/Login.jsx">
        <Login />
      </Route>
    </Switch> 
    
  </Router> 
)
}


ReactDom.render(
  
  <App />, document.getElementById("app")
);
