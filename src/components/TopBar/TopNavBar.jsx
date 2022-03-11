import React from "react"
import ControlBar from "./ControlBar"
import Account from "./Account"

const TopNavBar = () => {

    return(
        <header className="topBar">

            <div className="logo">
                logo
            </div>
       
            <ControlBar />
            <Account />
        </header>
)}

export default TopNavBar
export {default as ControlBar} from './ControlBar'
export {default as Account} from './Account'
