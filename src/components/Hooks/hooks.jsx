import React, { createContext, useContext, useState } from 'react'

// import Toolbar from './toolbar';

let context = createContext("light");

function Hooks() {

    //usecontext with example

    let [contextValue, setContextValue] = useState("Light")
  return (
    <>
        <context.Provider value={contextValue}>
        <div className="hooks-container">
            <h1>Hooks Example</h1>
            <p>Current theme: {contextValue}</p>

            <button onClick={()=> setContextValue("Dark")}>Dark</button>
            <br />
            {/* <button onClick={()=> setContextValue("Light")}>Light</button> */}
            {/* {You can use contextValue in child components} */}

        </div>

        <Toolbar/>
        </context.Provider>
    </>
  );
}

function Toolbar() {
  return (
    <>
    <ThemeButton/>
    </>
  )
}
function ThemeButton() {
    let theme = useContext(context)
    let light = {
    backgroundcolor: "white",
    color: "black",
    height: "60vh",
}
  let dark = {
    backgroundcolor: "black",
    color: "white",
    height: "50vh",
  }
    // const theme = userContext(ThemeButton);
//   return <button>Theme Button</button>
  return(
    <>
  
  <div className={theme}> style={theme == "light" ? light : dark}
      theme {theme}
  </div> 
  </>

  ) 
}

export default Hooks

