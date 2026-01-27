//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card.jsx'
function App() {
 // const [count, setCount] = useState(0)
let myobj={name:"sparsh",age:21}
  return (
    <>
     <div>  
      <h1 className="bg-green-400 text-black p-4 rounded-xl m-0"> tailwind test </h1> 
  <Card channel="sparsh" someobject={myobj} />
  <Card/>
     </div>
    </>
  )
}

export default App
