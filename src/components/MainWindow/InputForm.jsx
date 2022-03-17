import React, { useState } from "react";
import {Redirect} from "react-router-dom"
import { createPost, editPost } from "../../api";

const InputForm = ({ token, allPosts, setAllPosts, toEdit, setToEdit, thisPost }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  const handleSubmit = async () => {
    const myToken = localStorage.getItem("token");

        const createNewPost = await createPost(
        myToken,
        title,
        description,
        price,
        location,
        deliver
      );
     
      const filteredPosts = allPosts.filter((post) => {return( post._id !== createNewPost._id)});
      const newPostArr = [...filteredPosts, createNewPost];
      setAllPosts(newPostArr);
  
  };

  const handleEdit = async () => {
    const myToken = localStorage.getItem("token");
   
    const edittedPost = await editPost(
    myToken,
    thisPost,
    title,
    description,
    price,
    location,
    deliver
  );
  const filteredPosts = allPosts.filter((post) => {return( post._id !== edittedPost._id)});
      const newPostArr = [...filteredPosts, edittedPost];
      setAllPosts(newPostArr);
      setToEdit(false)
      
  }

  return (
    <form
      id="SubmitForm"
      onSubmit={async (e) => {
        e.preventDefault();
        if (toEdit){
          { try {
          handleEdit()
        } catch {
          console.error(e);
        }}
        } else { try {
           handleSubmit();
        } catch {
          console.error(e);
        }}

      }}
    >
      <label htmlFor="SubmitForm" className="submitFormLabel display-6"> Form </label>
      <fieldset  class="inputForm ">
        <input
          type="text"
          placeholder="Title"
          className="inputFormPost form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>
      <fieldset className="inputForm">
        <input
          type="text"
          placeholder="Price"
          className="inputFormPost form-control"
          onChange={(e) => setPrice(e.target.value)}
        />
      </fieldset>
      <fieldset className="inputForm ">
        <input
          type="text"
          placeholder="Location"
          className="inputFormPost form-control"
          onChange={(e) => setLocation(e.target.value)}
        />
      </fieldset>
      <fieldset className="inputForm">
        <input
          type="text"
          placeholder="Description"
          className="inputFormPost form-control"
          onChange={(e) => setDescription(e.target.value)}
        />
      </fieldset>
      <button className="btn btn-secondary">Submit</button>
    </form>
  );
};

export default InputForm;
