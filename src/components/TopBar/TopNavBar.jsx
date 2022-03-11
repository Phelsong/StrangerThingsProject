import React from "react"
import ControlBar from "./ControlBar"
import Login from "./Login"

const TopNavBar = () => {

    return(
        <header className="topBarContent">

            <div className="logo">
                logo
            </div>
       
            <ControlBar />
            <Login />
        </header>
)}

export default TopNavBar
export {default as ControlBar} from './ControlBar'
export {default as Login} from './Login'
