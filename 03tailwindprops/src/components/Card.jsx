import React from 'react'

export default function Card({channel, someobject}) {
  return (
     <div className="@container">
       <div className="grid grid-cols-1 @sm:grid-cols-2">
         <img
           src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="Northern lights"
           className="aspect-square @sm:aspect-3/2 object-cover"
         />
         <div className="p-4">
           <p>Channel: {channel}</p>
           <p>Name: {someobject?.name}</p>
           <p>Age: {someobject?.age}</p>
         </div>
       </div>
     </div>
  )
}