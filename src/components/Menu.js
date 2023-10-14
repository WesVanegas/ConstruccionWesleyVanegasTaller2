import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
        <h1 className='text-sky-600 m-10 font-light text-3x1'> Menú</h1>

        <h1 className='text-blue-500'>Working in something</h1>
        <Link to="/signup" className='ml-3 bg-blue-800 hover:bg-blue-400, inline-block mb-5 p-2 text-white uppercase font-bold'> Sign Up
        </Link>
    </>
  )
}
