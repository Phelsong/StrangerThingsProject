import React from "react"
import Description from "./Description"
import SearchBar from "./SearchBar"



const SideBar = () => {

    return (
<div className="sideBar">
<SearchBar />
<Description />




</div>

    )}



export default SideBar
export {default as SearchBar} from './SearchBar'
export {default as Description} from './Description'