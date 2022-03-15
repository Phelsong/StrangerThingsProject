import React, { useEffect, useState, Fragment } from "react";
import RegisterUser from "./RegisterUser";
import ListView from "./ListView";
import InputForm from "./InputForm";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Main = () => {
  let urlRef = window.location.href.split("/").pop()
  useEffect(() => { }, [])
  const Key = {
        Login: <Login />,
      InputForm: < InputForm />,
      RegisterUser: <RegisterUser /> ,
      ListView:  < ListView />,
      
  }
    return (
        <div className="Main">
            {/* doesnt do anything, revist later */}
        {urlRef ? Key[urlRef]: Key[urlRef]}

        </div>
    );

};


export default Main;
export { default as RegisterUser} from "./RegisterUser";
export { default as ListView } from "./ListView";
export { default as InputForm } from "./InputForm";
export { default as Login } from "./Login";
// ;