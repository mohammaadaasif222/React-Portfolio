import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
function NavBar() {
  const [theme, setTheme] = useState("");

  const changeTheme = () => {
    if (theme === "") {
      setTheme("dark-mode");
    } else {
      setTheme("");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  });

  return (
    <Navbar expand="lg" className="pt-3 pb-5">
      <Container>
        <Navbar.Brand href="/">MOHAMMAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link  href="#action1">About</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item
                href="https://womens-clothing.netlify.app"
                target="_blank"
              >
                Women's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://mohammad-touch-typing.netlify.app"
                target="_blank"
              >
                Touch Typing
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://mohammad-todo-list-app.netlify.app"
                target="_blank"
              >
                Todo List
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://tip-calculator-mohammad.netlify.app"
                target="_blank"
              >
                Tip Calculator
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://mohammad-aasif-calculator.netlify.app"
                target="_blank"
              >
                Calculator
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Resume</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <a className="mode" onClick={() => changeTheme()}>
                <div className="color-mode d-lg-flex ">
                  <i className="color-mode-icon text-dark">
                  </i>
                  Color mode
                </div>
              </a>
            </div>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
