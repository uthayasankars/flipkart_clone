import CategoryItems from "./category-items";
import '../Category/category.css';

function Category() {
  console.log("Category");

  return (
    <>
    <div className="category">
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" categoryName="Grocery"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" categoryName="Mobiles"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" categoryName="Fashion"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" categoryName="Electronics"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" categoryName="Home & Furniture"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" categoryName="Appliances"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" categoryName="Flight Booking"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" categoryName="Beauty Toy & More"/>
    <CategoryItems imageURL="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" categoryName="Two Wheelers"/>
    </div>
    </>
  )
}

export default Category