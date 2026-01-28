import { useEffect, useState,useRef } from 'react'
import { useCallback } from 'react'

import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const[charsallowed,setcharsallowed]=useState(false)
  const[Password,setPassword]=useState("")
///useref hook
const passwordref=useRef(null)

const copypasswordtoclipboard=useCallback(()=>{
  passwordref.current?.select()
window.navigator.clipboard.writeText(Password)
},[Password])

  const Passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) {
      str += "0123456789"
    }
    if (charsallowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [Length, numberallowed, charsallowed])

  useEffect(() => {
    Passwordgenerator()
  },[Length,numberallowed,charsallowed,Passwordgenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto mt-10 p-4 bg-gray-700 rounded-lg shadow-md text-orange'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>
     <div className=" flex shadow rounded-lg overflow-hidden mb-4">
      <input
      type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}
      />
     
       <button onClick={copypasswordtoclipboard}
           className="bg-orange-500 text-white px-3 py-1 shrink-0"
         >
        Copy
        </button>

      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={(e) => {setLength(Number(e.target.value))}}
          />
          <label>Length: {Length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberinput"
          onChange={(e) =>{setnumberallowed(e.target.checked)}}
          />
          <label htmlFor="numberinput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          Checked={charsallowed}
          id="charsinput"
          onChange={() =>{setcharsallowed((prev)=>!prev)}}
          />
          <label htmlFor="charsinput">Chars</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
