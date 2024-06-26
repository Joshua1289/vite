import "./product.css"

const Product = (props) => {
    const { id, title, price, description, category, image} = props.productObject;
   return(
    <div className="Product">
        <h2>Products</h2>
        <div className="image"><img src={image} alt="" /></div>
        <div>Id{id}</div>
        <div>Title{title}</div>
        <div>Price:{price}</div>
        <div>Description:{description}</div>
        <div>Category:{category}</div>
        {/* <div>Rating:{rate} ({count})</div> */}
    </div>
   )
}

export default Product;