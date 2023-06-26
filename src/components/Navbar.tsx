import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";

function OffcanvasExample() {
  const { Cart } = useSelector((state: any) => state.user);
  return (
    <>
      {[false].map((expand, key) => (
        <Navbar key={key} expand={expand} className="bg-dark navbar-dark mb-3 ">
          <Container fluid>
            <Navbar.Brand href="#">V - shop</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  shop now
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/cart">
                    Cart{" "}
                    <span
                      style={{
                        borderRadius: "50%",
                        marginLeft: "5px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      {Cart.length}
                    </span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
