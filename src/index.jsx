import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Main, TopNavBar, SideBar} from './components'
import DetailView from './components/MainWindow/DetailView'
import Login from './components/MainWindow/Login'



ReactDom.render(
    <Router>

        <TopNavBar />
        <Main/>
        <SideBar/>

    </Router>
  , document.getElementById("app")
)



