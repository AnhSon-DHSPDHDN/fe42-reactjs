import { useState } from "react";

const imgsData = [
  "https://product.hstatic.net/1000182631/product/cuathit_afd581be4c304d2d9e1d44604f3b338b_master.jpg",
  "https://kingfoodmart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsc_pcm_product%2Fprod%2F2023%2F10%2F26%2F15501-369133.jpg&w=3840&q=75",
  "https://bizweb.dktcdn.net/100/442/974/articles/ho-lo-phong-thuy-tac-dung.jpg?v=1697705521080",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carassius_wild_golden_fish_2013_G1.jpg/1200px-Carassius_wild_golden_fish_2013_G1.jpg",
  "https://images.hcmcpv.org.vn/res/news/2017/01/28-01-2017gachincua1.jpg",
  "https://cdn.sgtiepthi.vn/wp-content/uploads/2021/10/Nai-vang.jpg",
];

const useResultGamePlay = () => {
  const [result, setResult] = useState({
    data1: imgsData[0], // ket qua xuc xac 1
    data2: imgsData[0], // ket qua xuc xac 2
    data3: imgsData[0], // ket qua xuc xac 3
  });

  const handleNewGame = () => {
    const index1 = Math.floor(Math.random() * 6); // 0-5
    const index2 = Math.floor(Math.random() * 6); // 0-5
    const index3 = Math.floor(Math.random() * 6); // 0-5

    setResult({
      data1: imgsData[index1],
      data2: imgsData[index2],
      data3: imgsData[index3],
    });
  };

  return { result, handleNewGame };
};

export default useResultGamePlay;
