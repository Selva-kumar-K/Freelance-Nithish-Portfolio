import React from 'react'
import image1 from "../../public/images/image1.png"
import Image from './Image'
const Projects = () => {
  return (
    <div>
        <h1 id='projects' className='text-2xl font-mono font-medium'>Projects</h1>
        <div className='flex justify-evenly '>
            <Image/>
            <Image/>
            <Image/>
            <Image/>
        </div>   
    </div>
  )
}


export default Projects