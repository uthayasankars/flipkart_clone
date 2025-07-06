import React from 'react'
import ProdcutItem from './product-item'
import datas from "../../../datas.js"

function Products() {
  return (
    <>
        <div className="products-main">
            {datas.map((item)=>{
                return(

                
                    <div key={item.id} className="product-item-container">
                        <ProdcutItem 
                        images={item.thumbnail} 
                        name={item.title} 
                        price={item.price} 
                        stock={item.stock}/>
                 
                    </div>
                )
            })}

        </div>
    </>
  )
}

export default Products