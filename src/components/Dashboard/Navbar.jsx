import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const {user, logout} = useAuth()
  return (
    <div  className='fixed top-0 left-64 w-[calc(100%-16rem)] 
    flex items-center text-white justify-between h-12 bg-teal-700 px-5'>
      <p> Welcome, {user.name}</p> 
      
      <button className='px-4 py-1 bg-teal-400 hover:bg-teal-600' onClick={logout} >Logout</button>
    </div>
  )
}

export default Navbar
