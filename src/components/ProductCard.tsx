import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart, DeleteFromCart, SingleProduct } from "../app/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const location = useLocation();
  const reserve = localStorage.getItem(item.name);
  const navigate = useNavigate();

  const handleCart = () => {
    dispatch(AddToCart(item));
    localStorage.setItem(item.name, "yes");
  };
  const handleDelete = () => {
    dispatch(DeleteFromCart(item.name));
    localStorage.removeItem(item.name);
  };

  const handleSingle = () => {
    dispatch(SingleProduct(item));
    navigate("/product");
  };
  return (
    <div
      className="card d-flex flex-column  justify-content-between"
      style={{ width: "18rem" }}
    >
      <img
        className="card-img-top"
        height={400}
        width={400}
        src={item.image_url}
        alt="Card image cap"
      />

      <div className="container mt-5">
        <h5 className="card-title">
          {item.name}
          <a href="">
            <span
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                marginLeft: "10px",
              }}
              onClick={handleSingle}
            >
              Explore
            </span>
          </a>
        </h5>
        <p className="card-text">{item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">price : ${item.price}</li>
      </ul>
      <div className=" d-flex gap-3 m-1" style={{ height: "40px" }}>
        <button type="button" className="btn btn-outline-dark">
          Buy
        </button>
        {location.pathname === "/cart" ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleDelete}
          >
            delete from cart
          </button>
        ) : reserve ? (
          <button
            type="button"
            className="btn btn-secondary"
            id={item.name}
            disabled
          >
            Added to Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary"
            id={item.name}
            onClick={handleCart}
          >
            add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
