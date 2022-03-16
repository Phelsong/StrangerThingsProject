import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";

const ControlBar = () => {

    return (
        <div id="controlBar">
            ControlBar
            <Link to="/InputForm" > Input </Link> 
            <Link to="/ListView"> ListView </Link> 
        </div>
    )}





export default ControlBar