import React from 'react'
import { useEffect } from 'react'
import { getAllPosts } from '../../api'



const ListView = ()=>{
    console.log(allPosts)
   async function content(){
        const contentPost = await getAllPosts()
            contentPost.data.posts.map((post)=> {
                console.log(post)
                setAllPosts(post) 
                }) 
            }
            content()
                return(
                    <div className="listViewBox"> 
            <h2>Listing</h2> 
            <span>Quick Description</span>
            <ul>
            <li>
            <h5>Price</h5>temp
            </li>
            <li>
            <h5>Seller</h5>temp
        </li>
        <li>
            <h5>Location</h5>temp
        </li>
    </ul>
    <button id="sendMessageButton">Send Message</button>
    </div>


    )}



export default ListView