import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";

const ControlBar = ({ME}) => {

    return (
        <div id="controlBar">
            
            {ME ? <Link to="/InputForm" > <i className="controlBarIcon bi bi-plus-square"> </i> </Link> : null}
            <Link to="/ListView"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="List View"> 
            
            <i className="controlBarIcon bi bi-layout-text-window" ></i> 
            </Link> 
        </div>
    )}





export default ControlBar

