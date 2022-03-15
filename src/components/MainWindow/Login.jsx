import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { registerUser } from "../../api";

const Login = (props) => {

  const [inputUser, getInputUser] = useState = ('')
  const [inputPass, getInputPass] = useState = ('')

  useEffect (() => {

    
    try {
     registerUser(inputUser, inputPass)
    } catch (error) {
      console.error(error)
    }
},[])
  return (
    <form className="registerForm" 
    >
        event.preventDefault()
        console.log (inputUser, inputPass, 'login ')
        <label htmlFor="login"> Login </label>
         <fieldset className="register">
        <input type="text" placeholder="Username..."  value={inputUser}  id="userName" onSubmit={(event) => { getInputUser(event.target.value)}}/>
        </fieldset>
        <fieldset className="register">
        <input type="password" placeholder="Password Here..."  value={inputPass} id="password" onSubmit={(event) => getInputPass(event.target.value)} />
        </fieldset>
        <button type= "submit">Submit</button>
      </form>
  );
};


export default Login;
