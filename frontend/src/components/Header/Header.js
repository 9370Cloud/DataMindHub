import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  const navbarStyle = {
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "10px 0",
  };

  const brandStyle = {
    marginRight: "30px",
  };

  const linkStyle = {
    marginRight: "15px",
  };

  const buttonStyle = {
    borderRadius: "20px", 
    marginRight: "15px",
    // Signup 버튼의 색상만 바꿔야됨 => 귀찮은 부분 | 너무 귀찮으면 안 바꿔도 되고.
  };

  return (
      <Navbar style={navbarStyle} expand="lg" variant="light">
        <Container>
          <Navbar.Brand style={brandStyle} href="#home">
            dataMindHub💫
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={linkStyle} href="#about">
                About Us
              </Nav.Link>
              <Nav.Link style={linkStyle} href="#post">
                Post
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light" style={buttonStyle} href="#login">
                Login
              </Button>
              <Button variant="success" style={buttonStyle} href="#signup">
                SignUp
              </Button>
              <Nav.Link style={linkStyle} href="#search">
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
