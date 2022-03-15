import React, { useState } from "react";
import { userLogin } from "../../api";

const Login = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  return (
  
      <form
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          userLogin (inputUser, inputPass);
        }}
      >
        <label htmlFor="Login"> Log-In </label>
        <fieldset className="login">
          <input
            type="text"
            placeholder="Username..."
            className="userName"
            onChange={(e) => setInputUser(e.target.value)}
          />
        </fieldset>
        <fieldset className="login">
          <input
            type="password"
            placeholder="Password Here..."
            className="password"
            onChange={(e) => setInputPass(e.target.value)}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>

  );
};

export default Login;
