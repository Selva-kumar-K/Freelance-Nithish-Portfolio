import React from 'react'
import photoImage from "../../public/images/photo.jpg"
const About = () => {
  return (
    <div className='mt-14 '>
        <h2 id='about' className='text-2xl font-mono font-medium'>About</h2>
        <div className='p-6 flex w-2/4 space-x-2'>
            <img src={photoImage} className='w-72 '/>
            <div className='block'>
            <h4 className='font-bold '>Meet Nithish</h4>
            <p>The page introduces founder Emily Schuman, as well as her blog, books, and fashion collection
            The page introduces founder Emily Schuman, as well as her blog, books, and fashion collection
            </p>
            </div>
          
        </div>
    </div>
  )
}

export default About