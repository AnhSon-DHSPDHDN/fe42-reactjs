import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { Spin } from "antd";
import { useEffect } from "react";
import { actFetchAllProducts } from "../../redux/features/product/productSlice";

const ProductPage = () => {
  const { loading, products } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(actFetchAllProducts({}));
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      {loading && <Spin />}

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
