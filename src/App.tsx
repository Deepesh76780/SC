import "./App.css";
import AllProduct from "./pages/AllProduct";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProdut from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Page404 from "./components/Page404";

function App() {
  const { SingleProduct } = useSelector((state: any) => state.user);

  return (
    <>
      <Navbar />
      <div
        className="m-5"
        style={{
          paddingBottom: "100px",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProduct />} />
            <Route path={"/cart"} element={<Cart />} />
            {SingleProduct && (
              <Route path={"/product"} element={<SingleProdut />} />
            )}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
