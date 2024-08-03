import React from 'react'
import Intro from "../assets/about.mp4"

const about = () => {
  return (
    <div>
        <video 
        autoPlay
        loop
        className='w-full h-auto'
        src={Intro}></video>
    </div>
  )
}

export default about