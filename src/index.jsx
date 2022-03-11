import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Main, TopNavBar, SideBar} from './components'



ReactDom.render(
    <Router>
        
        <TopNavBar />
       
        <Main/>
        <SideBar/>

    </Router>, document.getElementById("app")
)


