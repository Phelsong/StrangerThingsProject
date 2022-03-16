import React from "react";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../api";
// 
const ListView = ({allPosts, setAllPosts}) => {
  
    // useEffect(async () => {
    //   const contentPost = await getAllPosts();
    //   contentPost.data.posts.map((post) => {setAllPosts(post)})
  
    //  }, [] );  

        
//  const {price, seller, description,location} = allPosts
    
    
  
  return (
    <div className="listViewBox">
      {/* <h2>Listing</h2>
      <span>{description}</span>
      <ul>
        <li>
          <h5>{price}</h5>temp
        </li>
        <li>
          <h5>{seller}</h5>temp
        </li>
        <li>
          <h5>{location}</h5>temp
        </li>
      </ul> */}
      <button id="sendMessageButton">Send Message</button>
    </div>
  );
};

export default ListView;
