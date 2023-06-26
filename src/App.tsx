import "./App.css";
import AllProduct from "./pages/AllProduct";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProduct />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
