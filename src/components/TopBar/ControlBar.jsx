import React from "react"
import InputForm from "../MainWindow/InputForm"
import ListView from "../MainWindow/ListView";
import { BrowserRouter as Router, Route, Link, Switch, NoMatch } from "react-router-dom";
const ControlBar = () => {

    return (
        <div id="controlBar">
            ControlBar
            <Link to="../MainWindow/InputForm.jsx"> Input </Link> 
            <Link to="../MainWindow/ListView.jsx"> ListView </Link> 
        </div>
    )}





export default ControlBar