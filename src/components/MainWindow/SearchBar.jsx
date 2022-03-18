import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

const SearchBar = ({allPosts, setDisplayPosts }) => {
    const [query, setQuery] = useState(null)
    const navigateTo = useNavigate()


    const toQuery = async () => {    
    if(!query) { return error;}
    try{
          const filteredPosts = allPosts.filter(post => post.title.includes(!query));
          console.log(post.title)
          const newPostArr = [...filteredPosts];
          setDisplayPosts(newPostArr);
    } catch {console.error('error')}
    finally {navigateTo("/ListView")}  
      };

    return (
<form className="mainSearch"
onSubmit={(e)=> {
    e.preventDefault();
    toQuery()}}>
   
   <input type="search" placeholder="Search Here..." id="sbSearchField" className="inputForm form-control"  onChange={(e)=> setQuery(e.target.value)}/>
   <button type="submit" className="postButton btn btn-outline-info bg-white"> Submit </button>
    </form>
    )}

export default SearchBar