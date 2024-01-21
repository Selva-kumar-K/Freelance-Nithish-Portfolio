import React from 'react'
import image from "../../public/images/logo2.jpg"

const Header = () => {
  return (
    <div className='flex justify-between w-3/4 m-auto items-center'>
        <img src={image} className='w-12 rounded-full    '/>
        <div className='space-x-3 font-medium'>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a href='#about'>About</a>
        </div>
    </div>
  )
}

export default Header