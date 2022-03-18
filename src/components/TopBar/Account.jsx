import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";
const Account = ()=>{

    return(
        <div id='Account'> 
        <Link to="/Login" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login"> <i className="bi bi-file-person"></i> </Link> 
        </div>
    )}
export default Account

// className="btn btn-outline-secondary"