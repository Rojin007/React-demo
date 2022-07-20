import React from 'react'
import { useState,useEffect } from 'react'

const LifeCycle = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('mounting...')
        console.log('updating...'+count)
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Ride</button>
       <h1> Enjoy The ride in Cycle:{count}</h1>
        </div>
  )
}

export default LifeCycle