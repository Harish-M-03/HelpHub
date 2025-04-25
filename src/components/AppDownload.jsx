import React from 'react'
import appstore from '../assets/app_store.svg'
import appmain from '../assets/app_main_img.png'
import play from '../assets/play_store.svg'
const AppDownload = () => {
  return (
    <div className='ml-60 mt-30 flex items-center bg-purple-100 w-300 h-100'>
        <div className='ml-40 flex flex-col items-center'>
            <p className='p-5 text-2xl font-bold'>Download App From</p>
            <img className='p-5' src={appstore} alt="" />
            <img className='p-5' src={play} alt="" />
        </div>
        <div className='ml-80'>
            <img src={appmain} alt="" />
        </div>
    </div>
  )
}

export default AppDownload