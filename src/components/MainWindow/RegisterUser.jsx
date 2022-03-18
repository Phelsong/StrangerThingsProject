import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { registerNewUser } from "../../api";

const RegisterUser = ({setToken}) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const navigateTo = useNavigate()

  return (
      <form
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          try{
            const result = registerNewUser(inputUser, inputPass);
            localStorage.setItem('token', result.data.token)
            setToken(result.data.token)
            console.log(myToken)
          } catch {
            console.error(e)
          }
          finally {navigateTo("/ListView")}
        }}
      >
        <label htmlFor="SignUp"className="submitFormLabel display-6"> SignUp </label>
       
        <fieldset className="login">
          <input
            type="text"
            placeholder="Username..."
            className="userName form-control"
            onChange={(e) => setInputUser(e.target.value)}
          />
        </fieldset>
        <fieldset className="login">
          <input
            type="password"
            placeholder="Password Here..."
            className="password form-control"
            onChange={(e) => setInputPass(e.target.value)}
          />
        </fieldset>
        <button className="btn btn-secondary">Submit</button>
      </form>
  );
};

export default RegisterUser;
