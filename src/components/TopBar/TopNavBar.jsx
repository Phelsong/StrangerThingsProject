import React from "react"
import ControlBar from "./ControlBar"
import Account from "./Account"

const TopNavBar = ({ME}) => {
    return(
        <header className="topBar">
          <div className='logo'>  <i className="bi bi-person-lines-fill"> </i> Stranger's Things</div>
            <ControlBar ME={ME} />
            <Account />
        </header>
)}

export default TopNavBar
export {default as ControlBar} from './ControlBar'
export {default as Account} from './Account'
