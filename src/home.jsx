import Navbar from "./components/NavBar/navbar";
import Category from "./components/Category/category";
import { useEffect, useState } from "react";
import Products from "./components/products/products";
import ProductPage from "./components/products/product-page";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UseCallBack from "./Hooks/usecallback";

function Home(props) {
  
  return (
    <>
      <div className="main-home">
        <div className="home-navbar">
          <Navbar loginName="Login" />
        </div>
        <div>
          <Button variant="outlined" onClick={()=> nav(-1)}>Back</Button>
          <Button variant="outlined" onClick={()=> nav(1)}>Front</Button>
        </div>
        <div className="home-category shadow-2xl">
          <Category />
        </div>
        <div className="home-products shadow-2xl">
          <Products />
        </div>
      </div>
    </>
  );
}

export default Home