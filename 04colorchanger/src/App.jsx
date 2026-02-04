import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-3 bg-white px-4 py-3 rounded-3xl shadow-lg">
          <button 
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button 
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button 
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
