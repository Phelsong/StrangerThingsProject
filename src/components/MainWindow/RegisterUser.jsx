import React, { useState } from "react";
import { registerNewUser } from "../../api";

const RegisterUser = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  return (
      <form
        className="registerForm"
        onSubmit={async (e) => {
          e.preventDefault();
          try{
            const result = await registerNewUser(inputUser, inputPass);
            localStorage.setItem('token', result.data.token)
            setToken(result.data.token)
            console.log(myToken)
          } catch {
            console.error(e)
          }
        }}
      >
        <label htmlFor="SignUp"> SignUp </label>
       
        <fieldset className="register">
          <input
            type="text"
            placeholder="Username..."
            className="userName"
            onChange={(e) => setInputUser(e.target.value)}
          />
        </fieldset>
        <fieldset className="register">
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

export default RegisterUser;
