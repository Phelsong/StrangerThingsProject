import React from "react";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../api";
//
const ListView = ({ allPosts, setAllPosts }) => {


  return (
    <div className="listViewBox">



      {allPosts && allPosts.length? allPosts.map((post) => {
            const { title, price, description, location, willDeliver } = post;

            return (
              <div className="singlepost" key={post._id}>
                <h2>{title}</h2>
                <span>{description}</span>
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
                <button id="sendMessageButton">Send Message</button>
              </div>
            );
          })
        : null}

     
    </div>
  );
};

export default ListView;
