import "./App.css";
import AllProduct from "./pages/AllProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <AllProduct />
      </div>
    </>
  );
}

export default App;
