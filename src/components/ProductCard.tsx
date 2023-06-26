import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddToCart,
  DeleteFromCart,
  SingleProduct,
  QuantityIncrement,
  QuantityDecrement,
} from "../app/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

interface Data {
  name: string;
  image_url: string;
  description: string;
  price: number;
  quantity?: number;
}
interface ProductCardProps {
  key: number;
  item: Data;
}
const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const [showToast, setToast] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const reserve = localStorage.getItem(item.name);
  const navigate = useNavigate();

  const handleCart = () => {
    const Item = {
      name: item.name,
      image_url: item.image_url,
      description: item.description,
      price: item.price,
      quantity: 1,
    };
    dispatch(AddToCart(Item));
    localStorage.setItem(item.name, "1");
  };
  const handleDelete = () => {
    dispatch(DeleteFromCart(item.name));
    localStorage.removeItem(item.name);
  };

  const handleSingle = () => {
    dispatch(SingleProduct(item));
    navigate("/product");
  };

  const handleDecrement = () => {
    dispatch(QuantityDecrement(item.name));
  };
  const handleIncrement = () => {
    dispatch(QuantityIncrement(item.name));
  };
  return (
    <>
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
            <a
              href=""
              style={{
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
                onClick={handleSingle}
              >
                Explore
              </span>
            </a>
          </h5>
          {/* <p className="card-text">{item.description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          {location.pathname === "/" ? (
            <li className="list-group-item">price : ${item.price}</li>
          ) : (
            <>
              <li className="list-group-item">
                {item.quantity && `price : ${item.price * item.quantity}`}
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Quantity: {item.quantity}
                <span className="d-flex flex-row gap-4">
                  <span
                    onClick={handleDecrement}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    -
                  </span>
                  <span
                    onClick={handleIncrement}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    +
                  </span>
                </span>
              </li>
            </>
          )}
        </ul>
        <div className=" d-flex gap-3 m-1" style={{ height: "40px" }}>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => setToast(true)}
          >
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
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "20px",
          zIndex: "100",
        }}
      >
        <Toast
          onClose={() => setToast(false)}
          autohide
          show={showToast}
          delay={2200}
        >
          <Toast.Body>Thanks for your purchase!</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default ProductCard;
