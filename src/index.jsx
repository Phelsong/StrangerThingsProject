import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Main} from './components'
import {TopNavBar} from './components'
ReactDom.render(
    <Router>
        <TopNavBar />
        <Main/>
    </Router>, document.getElementById('app')
)



