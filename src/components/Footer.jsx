import React from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/instagram_icon.svg'
import fb from '../assets/facebook_icon.svg'
import twit from '../assets/twitter_icon.svg'
const Footer = () => {
  return (
    <div className='m-10 flex justify-between items-center'>
       
            <img src={logo} className='h-10 w-10' alt="" />
            <p className='text-3xl pl-4 font-bold text-gradient-to-r from-purple-500 to-gray-300'>HelpHub</p>
        <p className='flex-1 border-gray-400 pl-4 text-xl text-gray-500 max-sm:hidden'>Copyrights@2025 HelpHub.in</p>
        <div className='flex gap-2.5 mr-5 '>
            <img width={38} src={insta} alt="" />
            <img width={38} src={fb} alt="" />
            <img width={38} src={twit} alt="" />
        </div>
    </div>
  )
}

export default Footer