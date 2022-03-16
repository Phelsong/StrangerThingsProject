import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  TopNavBar,
  SideBar,
  ListView,
  InputForm,
  RegisterUser,
  Login,
} from "./components";

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <SideBar />

      <Routes>
        <Route path="/InputForm" element={<InputForm />} />
        <Route path="/ListView" element={<ListView />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

//
