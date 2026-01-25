import React from 'react'
import  ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>   
//       <h1>Hello World</h1>
//     </div>)
//   This is a function
// When React uses it, React calls it for you
// It creates UI every time

//MyApp = machine → React presses the button → UI comes out

// Takes the returned JSX
// Converts it to React elements
// Renders it to the DOM

// }
// const reactElement={
//     type:'a'//tells the type of HTML element to be created
//     ,props:{
//         href:'https://www.google.com',
//         target:'_blank'
    
// }
//     ,children:'Click Me'
// }
// const anotherElement=(
//   <a href='https://www.google.com' target='_blank'>Clfwick Me</a>
// )

const reactElement=React.createElement(
  'a',
  {
    href:"https://www.google.com", target:'_blank'
  },
  'click me to go to google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    <App />
  </>
)
