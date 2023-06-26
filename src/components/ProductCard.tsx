import React from "react";

interface Data {
  name: string;
  image_url: string;
  description: string;
  price: number;
}
interface ProductCardProps {
  key: number;
  item: Data;
}
const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div
      className="card d-flex flex-column  justify-content-between"
      style={{ width: "18rem" }}
    >
      <img
        className="img-fluid mt-5"
        height={400}
        width={400}
        src={item.image_url}
        alt="Card image cap"
      />

      <div className="container mt-5">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">price : ${item.price}</li>
      </ul>
      <div className=" d-flex gap-3 m-2" style={{ height: "30px" }}>
        <button type="button" className="btn btn-primary">
          Buy
        </button>
        <button type="button" className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
