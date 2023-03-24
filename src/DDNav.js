import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userlogout } from "./Components/Auth/authSlice";

function DDNav() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const auth = useSelector((store) => store.auth);

  const LogoutClicked = () => {
    dispatch(userlogout());
    nav("/Login");
    window.location.reload();
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#fd671a" }} expand="lg">
        <Container className="container" fluid>
          <Navbar.Brand href="/">BADREG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Orders">Orders</Nav.Link>
            </Nav>
            <div className="d-flex">
              <FaUser /> &nbsp; &nbsp;
              <NavDropdown title={JSON.stringify(auth.data.email)} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/ChangePassword">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={LogoutClicked}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DDNav;
