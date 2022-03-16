import React, { useEffect, useState, Fragment } from "react";
import RegisterUser from "./RegisterUser";
import ListView from "./ListView";
import InputForm from "./InputForm";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getAllPosts, userMe} from "../../api";

const Main = () => {
const [token, setToken] = useState('')
const [allPosts, setAllPosts]  = useState(null)
const [displayPosts, setDisplayPosts] = useState(null)
const [ME, setMe] = useState(null)

useEffect(async () => {
    const myToken = localStorage.getItem('token')
    const thisIsMe = await userMe(myToken)
    setToken(myToken)
    setMe(thisIsMe.data)
    //
    const contentPost = await getAllPosts();
    setAllPosts(contentPost.data.posts)
    
    // CONSOLE LOG HERE
    console.log('new api call')
   
   }, [] );  
   useEffect(async () => {
    console.log('re-render')
    setDisplayPosts(allPosts)
   
   }, [allPosts] );  

   //*** Template ***/
//    const postFiltering = async () => {
//     const deletedPost = await deletePost(token, postId)
//    const filteredPosts = allPosts.filter((post) => post._id !==postId)
//    setDisplayPosts([...filteredPosts])
//    //setDisplayPosts([])
//  }

  let urlRef = window.location.href.split("/").pop()
  const Key = {
     Login: <Login setToken={setToken}/>,
      InputForm: < InputForm token={token} setAllPosts={setAllPosts} allPosts={allPosts} />,
      RegisterUser: <RegisterUser setToken={setToken} /> ,
      ListView:  < ListView token={token} allPosts={allPosts} displayPosts={displayPosts} setAllPosts={setAllPosts} ME={ME}/>,
      
  }
 
    return (
        
        <div className="Main">
            {/* doesnt do anything, revist later */}
        {urlRef ? Key[urlRef]: Key[urlRef]}

        </div>
    );

};


export default Main;
export { default as RegisterUser} from "./RegisterUser";
export { default as ListView } from "./ListView";
export { default as InputForm } from "./InputForm";
export { default as Login } from "./Login";
// ; useEffect(() => { }, [])