import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Home from "./home";
// import Hooks from "./Hooks/hooks";
// import Referencee from "./Hooks/ref";
// import Form from "./reactForms/form";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grocery from "./pages/grocery";
import Mobile from "./pages/mobiles";
import ProductPage from "./components/products/product-page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/mobiles" element={<Mobile/>}/>
        <Route path="/product-item/:id" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
