import React from 'react'

function CategoryItems({imageURL, categoryName}) {
  return (
    <>
    <div className="category-item">
        <img src={imageURL} alt="category-items" />
        <p>{categoryName}</p>
    </div>
    </>
  )
}

export default CategoryItems