import React from 'react'
import logo from '../assets/logo.png'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  const{openSignIn}=useClerk()
  const {user}=useUser()
  return (
    <div className='shadow py-4 bg-white flex items-center'>
        <div className='ml-20 flex px-2 py-6'>
            <img className='pr-4 cursor-pointer' onClick={()=>navigate('/')} src={logo} width={60} height={60} alt="" />
            <p className='pl-2 text-2xl font-bold text-gray-900'>HelpHub</p>
        </div>
        <div className='pl-5 flex items-center '>
          <p className='pl-4 mb-3 text-xl text-gray-600 cursor-pointer' onClick={()=>{navigate('/')}}>Home</p>
          <p className='pl-4 mb-3  text-xl text-gray-600 cursor-pointer'>Services</p>
          <p className='pl-4  mb-3 text-xl text-gray-600 cursor-pointer'>About Us</p>
        </div>
        <div className='pl-200'>
          {
            user?<div className='flex items-center gap-3'>
            <Link to='/cart'>View cart</Link>
              <p>|</p>
              <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
              <UserButton/>
          </div>: <button onClick={e=>openSignIn()} className='text-xl text-white bg-purple-400 sm:px-9 py-2 rounded'>Login/SignUp</button>
          }
         
        </div>
    </div>
  )
}

export default Navbar