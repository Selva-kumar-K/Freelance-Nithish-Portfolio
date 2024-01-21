import React from 'react'
import image1 from "../../public/images/image1.png"
const Image = () => {
  return (
    <>
    <div className='w-72 h-60 block text-center rounded p-4 transition-all duration-700 hover:scale-110 shadow-amber-500'>
            <img src={image1} className='w-70'/>
            <a href='/'>Click here</a>
        </div>
    </>
  )
}

export default Image