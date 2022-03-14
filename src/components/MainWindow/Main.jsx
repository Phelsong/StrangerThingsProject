import React from 'react'
import Login from './Login'
import ListView from './ListView'
import InputForm from './InputForm'
import { Fragment } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



const Main = ()=>{
return(

    <ListView />


      
)}


export default Main
export {default as Login} from './Login'
export {default as ListView} from './ListView'
export {default as InputForm} from './InputForm'


// <DetailView />
// <InputForm />
// <Login /> 



{/* <Fragment>
<Route exact path="./components/MainWindow/ListView.jsx">
<ListView />
</Route>

<Route exact path="./components/MainWindow/InputForm.jsx">
<InputForm />
</Route>
<Route exact path="./components/MainWindow/Login.jsx">
<Login />
</Route>


</Fragment> */}