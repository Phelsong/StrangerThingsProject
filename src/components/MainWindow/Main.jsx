import React from "react";
import Login from "./Login";
import ListView from "./ListView";
import InputForm from "./InputForm";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.production.min";

const Main = () => {
  let urlRef = window.location.href.split("/").pop()
  const Key = {
      InputForm: < InputForm />,
      Login: <Login /> ,
      ListView:  < ListView />
  }
    return (
        <div className="Main">
            {/* doesnt do anything, revist later */}
        {urlRef !== -1 ? Key[urlRef] : Key.ListView }
        </div>
    );

};


export default Main;
export { default as Login } from "./Login";
export { default as ListView } from "./ListView";
export { default as InputForm } from "./InputForm";
// useEffect(() => { }, []);