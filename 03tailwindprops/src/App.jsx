import './App.css'
import Card from './components/Card.jsx'

// Component name must be capitalized
function Button({ text, onClick, color = "blue" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 text-white font-bold py-2 px-4 rounded`}
    >
      {text}
    </button>
  )
}

function App() {
  let myobj = { name: "sparsh", age: 21 }

  // Handler functions must be INSIDE the component, BEFORE return
  const handleLogin = () => alert("logged in")
  const handleSignIn = () => alert("signed in")

  return (
    <>
      <div>
        <h1 className="bg-green-400 text-black p-4 rounded-xl m-0">tailwind test</h1>

        {/* Buttons */}
        <div className="space-x-4 p-4">
          <Button text="Login" onClick={handleLogin} color="green" />
          <Button text="Sign In" onClick={handleSignIn} color="red" />
        </div>

        <Card channel="sparsh" someobject={myobj} />
        <Card channel="john" someobject={{ name: "john", age: 25 }} />
      </div>
    </>
  )
}

export default App
