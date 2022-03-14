import React from "react"
import Login from "../MainWindow/Login"
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";
const Account = ()=>{

    return(
        <div id='Account'> 
        <Link to="../MainWindow/Login.jsx"> Login/Account </Link> 
        </div>
    )}
export default Account