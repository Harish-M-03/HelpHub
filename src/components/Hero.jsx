import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
const Hero = ({setSearchCity}) => {
  const [input,setInput]=useState('')
  const handleSearch=()=>{
    setSearchCity(input.trim());
  }
  const handlepress=(e)=>{
    if(e.key==='Enter'){
      handleSearch()
    }
  }
  return (
    <div className='mt-30 flex items-center justify-center'>
        <div>
            <p className='text-2xl md:text-3xl lg:text-4xl text-gray-700 font-outfit font-bold mb-4'>Find Home <span className='text-purple-600'>Service/Repair</span> </p>
            <p className='pt-2 text-center text-2xl md:text-3xl lg:text-4xl text-gray-700 font-outfit font-bold mb-4'>Near You</p>
            <p className='text-center text-xl text-gray-600'>Explore Best Home Service & Repair near you</p>
            <div className='flex items-center mt-5'>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyPress={handlepress} placeholder="Search" className='w-100 h-10 rounded-full border border-gray-400 mt-6 p-5'/>
            <div className='flex items-center pt-4 pl-4'><FaSearch onClick={handleSearch} className='text-purple-400 w-10 h-7 cursor-pointer'/></div>
            
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Hero