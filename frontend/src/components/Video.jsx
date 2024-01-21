import video from "../../public/videos/7up.mp4"
import "../../src/App.css"

import React from 'react'

const Video = () => {
  return (
    <div>
        <video autoPlay loop muted id="myVideo">
        <source src={video} type="video/mp4"/>
      </video>

    </div>
  )
}

export default Video