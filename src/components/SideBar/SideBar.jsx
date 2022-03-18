import React from "react"
import MyMessages from "./MyMessages"
import SearchBar from "./SearchBar"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



const SideBar = ({ME, thisPost, setThisPost}) => {

    return (
<div className="sideBar">
<SearchBar />
{ME ? <MyMessages ME={ME} thisPost={thisPost} setThisPost={setThisPost} /> : null}





</div>

    )}



export default SideBar
