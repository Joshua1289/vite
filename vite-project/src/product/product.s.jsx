import { useEffect, useState } from "react";
import Product from "./product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(function () {
      fetch('https://fakestoreapi.com/products')
      .them(function(res) {
        return res.json();
      })
      .then(function(res) {
        setProducts(res);
      })
    })
}
    console.log(products);

    return (
        <div>Products
           <div>{products.map(function (productObject, index ){
            return <Product productObject={productObject} key={index} />
           })}</div> 
        </div>
    ),
}

export default Products;