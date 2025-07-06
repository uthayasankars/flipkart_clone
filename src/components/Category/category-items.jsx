import datas from '../../../datas.js'

function CategoryItems({imageURL, categoryName}) {

  console.log(datas);
  
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