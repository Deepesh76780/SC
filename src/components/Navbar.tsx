import { useSelector } from "react-redux";

const Navbar = () => {
  const { Cart } = useSelector((state: any) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2  sticky-top">
      <a className="navbar-brand" href="/">
        V-shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
              {/* <span className="sr-only">(current)</span> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart
              <span
                style={{
                  borderRadius: "30%",
                  marginLeft: "10px",
                  backgroundColor: "white",
                  color: "black",
                  padding: "3px",
                }}
              >
                {Cart.length}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
