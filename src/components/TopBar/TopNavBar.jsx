import React from "react"
import ControlBar from "./ControlBar"
import Account from "./Account"

const TopNavBar = () => {
    return(
        <header className="topBar">
            <h2 className='logo'>Logo</h2>
            <ControlBar />
            <Account />
        </header>
)}

export default TopNavBar
export {default as ControlBar} from './ControlBar'
export {default as Account} from './Account'
