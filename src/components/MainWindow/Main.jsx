import React, { useEffect, useState, Fragment } from "react";
import RegisterUser from "./RegisterUser";
import ListView from "./ListView";
import InputForm from "./InputForm";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getAllPosts } from "../../api";

const Main = () => {
const [token, setToken] = useState('')
const [allPosts, setAllPosts]  = useState(null)


  let urlRef = window.location.href.split("/").pop()
  const Key = {
     Login: <Login setToken={setToken}/>,
      InputForm: < InputForm />,
      RegisterUser: <RegisterUser setToken={setToken} /> ,
      ListView:  < ListView allPosts={allPosts} setAllPosts={setAllPosts}/>,
      
  }
  useEffect(async () => {
    const contentPost = await getAllPosts();
    contentPost.data.posts.map((post) => {setAllPosts(post)})
    
   }, [allPosts] );  
  
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