import React from 'react'
import './product.css'
function ProdcutItem(props) {
  return (
    <>
        <div className="product-item h-85 w-60 p-4 border rounded-1g shadow-1g">
            <img src={props.images} alt="Product" />
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <p className="text-gray-500">{props.stock} Available</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                Add to Cart
            </button>
        </div>
    </>
  )
}

export default ProdcutItem