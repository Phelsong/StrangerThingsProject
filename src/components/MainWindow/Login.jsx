import React from "react";

const Login = () => {
  return (
      <form id="login">
        <label htmlFor="login"> Login </label>
        <input type="text" placeholder="Username..." id="userName" />
        <input type="password" placeholder="Password Here..." id="password" />
        <button>Submit</button>
      </form>
  );
};

//Login form
// <form id="login">
// <label htmlFor="login"> Login </label>
// <input type="text" placeholder="Username..." id="userName" />
// <input type="password" placeholder="Password Here..." id="password" />
// <button>Submit</button>
// </form>

export default Login;
