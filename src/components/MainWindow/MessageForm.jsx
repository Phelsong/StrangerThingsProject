import React, { useState } from "react";
import {sendMessage} from "../../api";

const MessageForm = ({token, thisPost}) => {
  const [message, setMessage] = useState("");


  return (
    <form
      id="messageForm"
      onSubmit={async (e) => {
        e.preventDefault();
        sendMessage(token, thisPost, message) 
        try {
        } catch {
          console.error(e);
        }
      }}
    >
      <label htmlFor="SubmitForm" className="submitFormLabel display-6">
        {" "}
        Form{" "}
      </label>    
      <fieldset className="inputForm">
        <input
          type="text"
          placeholder="message....."
          className="inputFormPost form-control"
          onChange={(e) => setMessage(e.target.value)}
        />
      </fieldset>
      <button className="btn btn-secondary">Submit</button>
    </form>
  );
};

export default MessageForm;
