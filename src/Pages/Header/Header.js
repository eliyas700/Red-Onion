import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="nav-bar">
          <Navbar.Brand href="#">
            <img as={Link} to="/" height={30} src={logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="text-right nav-items my-lg-0 ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/cart">
                  <FiShoppingCart
                    size={34}
                    className=" text-center mt-lg-2 mx-3 cart"
                  />
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login" className="navlink py-2 ">
                  Log In
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signup" className="navlink py-2 ">
                  Sign Up
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
