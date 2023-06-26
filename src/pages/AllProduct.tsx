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
      <div className="jumbotron">
        <div className="container mb-5">
          <h1 className="display-3" style={{ letterSpacing: "1px" }}>
            V-SHOP
          </h1>
          <p>
            VShop is your ultimate destination to procure the most cutting-edge
            gadgets available in the market.
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more »
            </a>
          </p>
        </div>
      </div>
      <div className="container d-flex flex-row  gap-5 flex-wrap justify-content-center">
        {Products.map((item: any, key: any) => {
          return <ProductCard key={key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
