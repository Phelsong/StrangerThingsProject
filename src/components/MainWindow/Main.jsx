import React, { useEffect, useState } from "react";
import RegisterUser from "./RegisterUser";
import ListView from "./ListView";
import InputForm from "./InputForm";
import Login from "./Login";
import MessageForm from "./MessageForm";
import SearchBar from "./SearchBar";
import { Routes, Route} from "react-router-dom";
import { getAllPosts, userMe} from "../../api";

const Main = ({ME, setMe, setThisPost, thisPost}) => {
const [token, setToken] = useState('')
const [allPosts, setAllPosts]  = useState(null)
const [displayPosts, setDisplayPosts] = useState(null)

const [toEdit, setToEdit] = useState(false)


// initial fetch
useEffect(async () => {
    const myToken = localStorage.getItem('token')
    if (myToken){
    const thisIsMe = await userMe(myToken)
    setToken(myToken)
    setMe(thisIsMe.data)}
    //
    const contentPost = await getAllPosts();
    setAllPosts(contentPost.data.posts)
   }, [token] );  


    // re-render whenever allPosts is updated
   useEffect(async () => {
    setDisplayPosts(allPosts)
   }, [allPosts] );  
  
   //*** Template ***/
//    const postFiltering = async () => {
//     const deletedPost = await deletePost(token, postId)
//    const filteredPosts = allPosts.filter((post) => post._id !==postId)
//    setDisplayPosts([...filteredPosts])
//    //setDisplayPosts([])
//  }

//   

    return (
        
        <div className="Main">
        <Routes>
        <Route path="*" element={< ListView/>}> </Route>
        <Route path="/InputForm" element={<InputForm token={token} setAllPosts={setAllPosts} allPosts={allPosts} setToEdit={setToEdit} toEdit={toEdit} thisPost={thisPost}/>} />
        <Route path="/ListView" element={<ListView token={token} allPosts={allPosts} displayPosts={displayPosts} setAllPosts={setAllPosts} ME={ME} setThisPost={setThisPost} thisPost={thisPost} setToEdit={setToEdit}/>} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/RegisterUser" element={<RegisterUser setToken={setToken}/>} />
        <Route path="/MessageForm" element={<MessageForm token={token} thisPost={thisPost} />} />
        <Route path="SearchBar" element={<SearchBar allPosts={allPosts} setDisplayPosts={setDisplayPosts}/>} />
        </Routes>
        </div>
    );

};


export default Main;
export { default as RegisterUser} from "./RegisterUser";
export { default as ListView } from "./ListView";
export { default as InputForm } from "./InputForm";
export { default as Login } from "./Login";
// ; useEffect(() => { }, [])let urlRef = window.location.href.split("/").pop()


//   const Key = {
//      Login: <Login />,
//       InputForm: < InputForm  />,
//       RegisterUser: <RegisterUser  /> ,
//       ListView:  < ListView token={token} allPosts={allPosts} displayPosts={displayPosts} setAllPosts={setAllPosts} ME={ME}/>,
      
//   }{/* {urlRef ? Key[urlRef]: Key[urlRef]} */}