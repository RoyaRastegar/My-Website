import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const NavbarCom = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-sm bg-dark navbar-dark nav "
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="link" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/about">
                  About
                </Link>
              </Nav.Link>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="link-drop" to="/todo">
                    ToDo
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="link-drop" to="/counter">
                    Counter
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="link-drop" to="/test1">
                    Test1
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="link-drop" to="/onlinshop">
                    OnlineShop
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="link-drop" to="/pizaamenu">
                    Pizza-Menu
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="link-drop">Another</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <div className="login-div">
                <Nav.Link>
                  <Link to="/login" className="link-login">
                    Login <FontAwesomeIcon icon={faRightToBracket} />
                  </Link>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCom;
