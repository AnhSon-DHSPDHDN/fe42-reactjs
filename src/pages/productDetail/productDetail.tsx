import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { actFetchProductById } from "../../redux/features/product/productSlice";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = useSelector((state: RootState) => state.product.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(actFetchProductById(productId as string));
  }, []);

  if (!product) {
    return <h1>No product found</h1>;
  }

  return (
    <div>
      <img src={product.img} alt="" width={500} height={300}></img>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductDetailPage;
