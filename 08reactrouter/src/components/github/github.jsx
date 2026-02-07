import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sparshgupta27')
    return response.json()
}