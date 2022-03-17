import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";

const ControlBar = ({ME}) => {

    return (
        <div id="controlBar">
            
            {ME ? <Link to="/InputForm" > Input </Link> : null}
            <Link to="/ListView"> ListView </Link> 
        </div>
    )}





export default ControlBar