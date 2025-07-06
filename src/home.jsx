import Navbar from './components/NavBar/navbar'
import Category from './components/Category/category';
import { useEffect, useState } from "react";

function Home(props) {
  const [name, setName] = useState("Uthayasankar S")
  useEffect(() => {
    console.log(`Home mounted with name: ${name}`);
  },[name]);
  
  return (
    <>
    <div className="main-home">
      <div className="home-navbar">
    <Navbar loginName="Login"/>
    </div>
    <div className="home-category shadow-2x1">
    <Category/>
    </div>
    <input type="text" name="userName" id="userName" placeholder="enter name" onChange={() => setName(document.getElementById('userName').value)}/>
    </div>
    </>

  )
}

export default Home