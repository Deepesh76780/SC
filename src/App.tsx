import "./App.css";
import AllProduct from "./pages/AllProduct";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  const pat = "https://main--capable-narwhal-aefc4d.netlify.app/cart";
  return (
    <>
      <Navbar />
      <div className="m-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProduct />} />
            <Route path={pat} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
