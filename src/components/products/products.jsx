import React from 'react'
import ProdcutItem from './product-item'
import datas from "../../../datas.js"
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
        <div className="products-main">
            {datas.map((item)=>{
                return(

                
                    <div key={item.id} className="product-item-container">
                    <Link to={`/product-item/${item.id}`}>
                        <ProdcutItem 
                        images={item.thumbnail} 
                        name={item.title} 
                        price={item.price} 
                        stock={item.stock}/>
                  </Link>
                    </div>
                )
            })}

        </div>
    </>
  )
}

export default Products

//1:16:35