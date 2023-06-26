import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart, DeleteFromCart } from "../app/cartSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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

  console.log(location.pathname);
  const handleCart = () => {
    dispatch(AddToCart(item));
    localStorage.setItem(item.name, "yes");
  };
  const handleDelete = () => {
    dispatch(DeleteFromCart(item.name));
    localStorage.removeItem(item.name);
  };

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

        {location.pathname === "/cart" ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={handleDelete}
          >
            delete from cart
          </button>
        ) : reserve ? (
          <button
            type="button"
            className="btn btn-success"
            id={item.name}
            onClick={handleCart}
            disabled
          >
            Added to Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
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
