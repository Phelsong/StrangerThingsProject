import React from "react";
import { useState } from "react";

import { registerUser } from "../../api";

const Login = (props) => {

  const [inputUser, setInputUser] = useState = ('')
  const [inputPass, setInputPass] = useState = ('')

//   useEffect (() => {

    
//     try {
//      registerUser(inputUser, inputPass)
//     } catch (error) {
//       console.error(error)
//     }
// },[])
  return (
    <div>
    <form className="registerForm"
    onSubmit={(event) => {
      event.preventDefault()
      registerUser(inputUser, inputPass)
    }}
    >
        <label htmlFor="login"> Login </label>
         <fieldset className="register">
        <input type="text" placeholder="Username..." id="userName" onChange={(event) => { setInputUser(event.target.value)}}/>
        </fieldset>
        <fieldset className="register">
        <input type="password" placeholder="Password Here..." id="password" onChange={(event) => setInputPass(event.target.value)} />
        </fieldset>
        <button type= "submit">Submit</button>
      </form>
      </div>
  );
};


export default Login;
