import { useLocation, useNavigate, useParams } from "react-router-dom";
import DATAS from "../../../datas";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState(null);

  const loc = useLocation()
  console.log("current path: "+ loc.pathname);
  console.log("search: " + loc.search);
  

  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProduct(data);
    //     console.log(data.reviews[0]);
    //   });

      axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
        setProduct(res.data)
        console.log(res.data);
      })
  }, [id]);

  if (product == null) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <div className="productMain" style={{ display: "flex", padding: "50px" }}>
        <div className="productImage">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="productdetails">
          <h1 className="productName">
            {product.id}. {product.title}
          </h1>
          <p className="productDescriptio">
            Description: {product.description}
          </p>
          <p>Category : {product.category}</p>
          <p>Price : ${product.price}</p>
          <p>Stock : {product.stock}</p>
          <p>warranty : {product.warrantyInformation}</p>
          <p>dimensions: {product.dimensions.width}</p>
          <div>
            reviews :
            {product.reviews.map((item, index) => (
              <ol key={index}>
                <li>{item.comment}</li>
              </ol>
            ))}
          </div>
          <p>shipping information: {product.shippingInformation}</p>
          <Button variant="contained" sx={{ my: 5 }} onClick={() => nav(-1)}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
