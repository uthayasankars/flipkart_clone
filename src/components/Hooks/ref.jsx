import React, { useRef } from 'react'
import audio from '../Hooks/audio.mp3'

function References() {

  let inpRef = useRef()

  let audioRef = useRef()

  return (
    <>
    <input ref={inpRef} type="text" name="name" id="name" placeholder='enter something...' />
    {/* <button onClick={()=> inpRef.current.focus()}>click to focus</button> */}

   

    <button onClick={()=> inpRef.current.value="Enjoy Your Day"}>click to focus</button><br />

    <audio ref={audioRef} src={audio} controls></audio>

    <button onClick={()=> audioRef.current.play()}>Play</button><br />
    <button onClick={()=> audioRef.current.pause()}>Pause</button>

    </>
  )
}

export default References

//1:16:57