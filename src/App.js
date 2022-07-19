
import Side from './Components/Side';
import './App.css';
import Base from "./Components/Base";
import { useState } from 'react';
import Counter from './Components/Counter';
import Employee from './Components/Employee';



function App() {
  const [count,setcount]=useState(0)
  const[vi,setVi]=useState(0)
 const add =()=>{
 
  setcount(count+1)
}
const go =()=>{
  setVi(vi+1)
}
let obj ={
  title:'secondcount',
  count
} 

  let emp=[
     {Name:'naruto',age:'12'},
     {Name:'sakura',age:'13'
  }]

  const data="ninak ethada malayalathil parada"
 return (
<div className='main' >
<Side/>
<Base data={data}/>
<h1 className='hai'>poda manda</h1>
<button onClick={add}> Add </button>
<button onClick={go}> Add </button>

<Counter {...obj} />
<Counter title="SecondCounter" count={vi}/>


<p className='hoi'>This is me this is what I do{data}</p>
{
emp.map((obj,index)=>{
  return(
  <Employee  key={index}{...obj}/>
  )
})
}
</div>
 
 );
  
}

export default App;


