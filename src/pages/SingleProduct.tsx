import { useSelector, useDispatch } from "react-redux";
import { AddToCart, DeleteFromCart } from "../app/cartSlice";
import { useLocation } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { useState } from "react";

const SingleProduct = () => {
  const { SingleProduct } = useSelector((state: any) => state.user);
  const [showToast, setToast] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const reserve = localStorage.getItem(SingleProduct.name);

  const handleCart = () => {
    dispatch(AddToCart(SingleProduct));
    localStorage.setItem(SingleProduct.name, "yes");
  };
  const handleDelete = () => {
    dispatch(DeleteFromCart(SingleProduct.name));
    localStorage.removeItem(SingleProduct.name);
  };

  return (
    <>
      <div className="card mb-3 m-auto" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={SingleProduct.image_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{SingleProduct.name}</h5>
              <p className="card-text">{SingleProduct.description}</p>
              <p className="card-text">
                <small className="text-muted">${SingleProduct.price}</small>
              </p>
            </div>
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
                  id={SingleProduct.name}
                  disabled
                >
                  Added to Cart
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  id={SingleProduct.name}
                  onClick={handleCart}
                >
                  add to Cart
                </button>
              )}
            </div>
          </div>
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

export default SingleProduct;
