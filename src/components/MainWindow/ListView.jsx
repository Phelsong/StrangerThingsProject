import React from "react";
import{Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { deletePost } from "../../api";
import {Button} from "react"
//
const ListView = ({ token, displayPosts, allPosts, setAllPosts, ME, setThisPost, setToEdit }) => {


  const handleDelete = async (token, postIdentifier) => {

    const [postId, authorId] = postIdentifier.split(',')
 
      if (authorId !== ME._id ){
        console.error('not your post')
      } else {
       const deletedPost = await deletePost(token, postId)
       const filteredPosts = ''
       setAllPosts(allPosts.filter((post) => post._id !== postId))
      }
      }
    const sendMessageID = async (post) => {
      setThisPost(post)
      console.log(post, "thisPost")
    }
  return (
    <div className="listViewBox">



      {displayPosts && displayPosts.length ? displayPosts.map((post) => {
            const { title, price, description, location, willDeliver, author } = post;
            const postIdentifier = [post._id, author._id, '[0]=postid :: [1]=authorid']
            return (
              <div className="singlepost" key={post._id}>
                <div className="singlePostTitle">
                <h2>{title}</h2>
                <span>{description}</span>
               </div>
                <div className="singlePostContent">
                
                <ul>
                  <li>
                    <h5>Price: {price}</h5>
                  </li>
                  <li>
                    <h5>Seller: {post.author.username}</h5>
                  </li>
                  <li>
                    <h5>Location: {location}</h5>
                    </li>
                  <li>
                    <h5>Delivery: {willDeliver.toString()}</h5>
                  </li>
                </ul>
                <div className="controlStrip">
                {ME ? <Link to="/MessageForm" onClick={() => sendMessageID(post._id)}><button className="postButton btn btn-outline-info"> <i className="mainClickables bi bi-chat"></i> </button></Link>: null}
                {ME && ME._id === author._id ? <Link to="/InputForm" onClick={
                  () => {sendMessageID(post._id) 
                  setToEdit(true)}}><button className="postButton btn btn-outline-info"><i className="mainClickables bi bi-pen"></i></button></Link> 
                  :null}
                {ME && ME._id === author._id ? <button id="deleteButton" className="postButton btn btn-outline-info" value={postIdentifier} onClick={(e)=> handleDelete(token, e.target.value)}> <i className="mainClickables bi bi-trash"> </i> </button> :null}
                </div>
                </div>
              </div>
            );
          })
        : null}

     
    </div>
  );
};

export default ListView;
