import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2 id='contact' className='text-2xl font-mono font-medium'>Contact</h2>

        <div className='flex col '>
            <input type='text' placeholder='Enter the name'/>
            <input type="email" placeholder='Enter the email'/>
            <input type="submit"/>
        </div>
    </div>
  )
}

export default Contact