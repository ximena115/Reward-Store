import img from "../assets/product-pics/GoPro-x2.png";
import "./product.css";

const Product = () => {
  return (
    <div className="card">
      <img src={img} alt={"foto"} />
      <div className="productInfo">
        <p className="category">{"category"}</p>
        <p className="name">{"name"}</p>
      </div>
    </div>
  );
};
export default Product;
