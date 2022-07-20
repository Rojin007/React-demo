import React from 'react'
import { useState } from 'react'
import LifeCycle from './LifeCycle'
const Home = () => {
    
    const[state,setState]=useState(false)
  return (
    <div>Home
         <h1 onClick={()=>setState(!state)}> ClickMe</h1>
         {state?<LifeCycle/>:null}
    </div>
  )
}

export default Home