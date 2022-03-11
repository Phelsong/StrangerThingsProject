import React from "react"

const SearchBar = () => {

    return (
<div className="mainSearch">
   <label htmlFor="site-search"> Search </label>
   <input type="search" placeholder="Search Here..." id="sbSearchField" />
   <button>Submit</button>
</div>
    )}

export default SearchBar