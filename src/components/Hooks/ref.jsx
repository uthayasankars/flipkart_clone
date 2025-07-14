import React, { useRef} from "react";
import audio from '../assets/mp3 song.mp3'
import React from 'react'

function References() {

    let inpref = useRef()
    let audioRef = useRef()

  return (
    <>
    <input ref={inpref} type="text" name="name" id="name" placeholder='enter something.....'/>
    <audio ref={audioref} src={audio} controls></audio>

    <button onClick={()=>inpref.current.value = "enjoy"}>Click to focus</button>
    <button onClick={()=> audioref.current.play()}>Play</button>
    <button onClick={()=> audioref.current.pause()}>Pause</button>
    </>
  )
}

export default References