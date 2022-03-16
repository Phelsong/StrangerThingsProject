import React, { useState }from 'react'
import { createPost } from '../../api';

const InputForm = ({token})=>{

  const [title, setTitle,]  = useState('')
  const [price, setPrice]  = useState('')
  const [description, setDescription]  = useState('')
  const [location, setLocation]  = useState('')
  const [deliver, setDeliver]  = useState(false)

    return(
     
            <form id="SubmitForm"
        onSubmit ={(e) => {
          e.preventDefault();
          const post = {title:title,description:description, price: price, location: location, willDeliver:deliver  }
          console.log(e.target.value)
          try{
            localStorage.getItem('token')
             createPost(token, post )
            
          
          } catch {console.error(e)}
        }}>

        <label htmlFor="SubmitForm"> Form </label>
        <fieldset className="InputForm">
          <input
            type="text"
            placeholder="Title"
            className="inputFormPost"
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset className="inputForm">
          <input
            type="text"
            placeholder="Price"
            className="inputFormPost"
            onChange={(e) => setPrice(e.target.value)}
          />
        </fieldset>
        <fieldset className="InputForm">
          <input
            type="text"
            placeholder="Location"
            className="inputFormPost"
            onChange={(e) => setLocation(e.target.value)}
          />
        </fieldset>
        <fieldset className="InputForm">
          <input
            type="text"
            placeholder="Description"
            className="inputFormPost"
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <button>Submit</button>
      </form>
    )}















export default InputForm