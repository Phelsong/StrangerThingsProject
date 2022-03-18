import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router,} from "react-router-dom";
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
  const [thisPost, setThisPost] = useState(null)

  return (
    <Router>
      <TopNavBar ME={ME} />
      <SideBar ME={ME} setThisPost={setThisPost} thisPost={thisPost}  />
      <Main ME={ME} setMe={setMe} setThisPost={setThisPost} thisPost={thisPost} />
      
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

//
