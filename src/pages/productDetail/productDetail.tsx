import { useParams } from "react-router-dom";

export const products = [
  {
    id: "vf3",
    img: "https://drive.gianhangvn.com/image/o9atv44-2623656j29995.jpg",
    name: "Vinfast VF3",
  },
  {
    id: "vf5",
    img: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-red-white.png",
    name: "Vinfast VF5",
  },
  {
    id: "vf6",
    img: "https://thanhnien.mediacdn.vn/Uploaded/chicuong/2022_11_18/vinfast-vf6-4-497.jpg",
    name: "Vinfast VF6",
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find((_product) => _product.id === productId);

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
