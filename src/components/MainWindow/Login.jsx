import React from "react";
import { useState } from "react";
import { registerUser } from "../../api";

const Login = (props) => {

  const [inputUser, getInputUser] = useState = ('')
  const [inputPass, getInputPass] = useState = ('')

  return (
      <form className="registerForm" onSubmit={async (event) => {

        event.preventDefault()
        console.log (inputUser, inputPass, 'login ')
        try {
          await registerUser(inputUser, inputPass)
        } catch (error) {
          console.error(error)
        }
      }}>
        <label htmlFor="login"> Login </label>
         <fieldset className="register">
        <input type="text" placeholder="Username..."  value={inputUser}  id="userName" on={(event) => getInputUser(event.target.value)}/>
        </fieldset>
        <fieldset className="register">
        <input type="password" placeholder="Password Here..."  value={inputPass} id="password" on={(event) => getInputPass(event.target.value)} />
        </fieldset>
        <button>Submit</button>
      </form>
  );
};


export default Login;
