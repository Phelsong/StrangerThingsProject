import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {sendMessage} from "../../api";

const MessageForm = ({token, thisPost}) => {
  const [message, setMessage] = useState("");
  const navigateTo = useNavigate()

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
        finally {navigateTo("/ListView")}
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
