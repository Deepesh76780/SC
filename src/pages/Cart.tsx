import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { Cart } = useSelector((state: any) => state.user);
  return (
    <div>
      <h1 className="text-center" style={{ letterSpacing: "2px" }}>
        CART-ITEMS
      </h1>
      <div className="container d-flex flex-row mt-5 gap-5 flex-wrap justify-content-center">
        {Cart.length ? (
          Cart.map((item: any, key: any) => {
            return <ProductCard key={key} item={item} />;
          })
        ) : (
          <p className="text-center text-muted">Your Cart is Empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
