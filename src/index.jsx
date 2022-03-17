import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  TopNavBar,
  SideBar,
  ListView,
  InputForm,
  RegisterUser,
  Login, Main
} from "./components";

const App = () => {
  const [ME, setMe] = useState(null)

  return (
    <Router>
      <TopNavBar ME={ME} />
      <SideBar ME={ME} />
      <Main ME={ME} setMe={setMe} />
      
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

//
