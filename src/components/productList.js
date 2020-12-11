import Product from "./product";
import "./productList.css";

const ProductList = () => {
    return(
        <div className="productList">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
};
export default ProductList;