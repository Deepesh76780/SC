import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const AllProduct = () => {
  const [Products, setData] = useState([]);

  useEffect(() => {
    const response: any = async () => {
      fetch("https://mocki.io/v1/30c9957e-295f-4c0b-8089-141425b6c3e1")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
    response();
  }, [Products]);

  return (
    <div>
      <h1 className="text-center">Products-List</h1>
      <div className="container d-flex flex-row mt-5 gap-5 flex-wrap justify-content-center">
        {Products.map((item: any, key: any) => {
          return <ProductCard key={key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
