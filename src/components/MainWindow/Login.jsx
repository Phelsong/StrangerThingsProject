import React, { useState } from "react";
import {Link} from "react-router-dom";
import { userLogin } from "../../api";

//test login 
// testJ
// 1234



const Login = ({setToken}) => {

  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
 

  return (
  
      <form
        className="loginForm"
        onSubmit={async (e) => {
          e.preventDefault();
          try{
          const result = await userLogin (inputUser, inputPass);
          localStorage.setItem('token', result.data.token)
          setToken(result.data.token)
      
          } catch {console.error(e)}
        }}
      >
        <label htmlFor="Login"className="submitFormLabel display-6"> Log-In </label>
        <Link to="/RegisterUser" data-bs-toggle="tooltip" data-bs-placement="bottom"> Register as a User </Link>
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

export default Login;
