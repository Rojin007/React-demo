import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from '../App'
import Home from './Home'

const Router = () => {
  return (
  <Routes>
    <Route path='/'element={<App/>}/>
    <Route path='Home' element={<Home/>}/>

 
  </Routes>
  )
}

export default Router