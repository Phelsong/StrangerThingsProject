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


// <InputForm />
// <Login /> 



{/* <Fragment>



</Fragment> */}