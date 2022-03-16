import React, { useState } from "react";
import { createPost } from "../../api";

const InputForm = ({ token, allPosts, setAllPosts }) => {

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
      console.log(createNewPost);
      const filteredPosts = allPosts.filter((post) => {return( post._id !== createNewPost._id)});
      const newPostArr = [...filteredPosts, createNewPost];
      setAllPosts(newPostArr);
  
  };

  return (
    <form
      id="SubmitForm"
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          //write ternary for state token or local storage token

           handleSubmit();
          
        } catch {
          console.error(e);
        }
      }}
    >
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
  );
};

export default InputForm;
