import React, { useRef } from 'react'

function References() {
  let inpRef = useRef()
  let handleRef = ()=>{

  }
  return (
    <>
    <input ref={inpRef} type="text" name="name" id="name" placeholder='enter something...' />
    <button onClick={inpRef.current.focus()}>click ti focus</button>
    </>
  )
}

export default References

//1:06:03