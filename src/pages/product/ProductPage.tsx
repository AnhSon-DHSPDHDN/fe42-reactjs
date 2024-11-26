import { Link } from "react-router-dom";
import { products } from "../productDetail/productDetail";

const ProductPage = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((_product) => {
          return (
            <li key={_product.id}>
              <Link to={`/product/${_product.id}`}>{_product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductPage;
