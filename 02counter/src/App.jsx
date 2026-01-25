import './App.css'
import { useState, } from 'react';//used to import useState hook from react


function App() {
 const [counter,setCounter]=useState(0 )//To change UI when data changes
//counter is state variable
//setCounter is function to update state variable
//useState(15) is initial value of counter
 // let counter =15
const INCREMENT=()=>{
  if(counter===20){
    return;}
  // counter =counter+1;
  else{
  setCounter(counter+1);//updating state variable ,updates counter every where in UI
  console.log("clicked",counter);//function body
}
}
const DECREMENT=()=>{
  if(counter===0){
    return;
  }else{
  setCounter(counter-1);//updating state variable ,updates counter every where in UI
  console.log("clicked",counter);//function body
}
}
  return (
    <>
 <div>
  <h1>  
    chai aur react
  </h1>
  <h2> counter :{counter}</h2>
<button onClick={INCREMENT}>INCREMENT</button>
  <br />
  <button onClick={DECREMENT}>DECREMENT </button>
  
 </div>
    </>
  )
}

export default App
