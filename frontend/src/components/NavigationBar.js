import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <Navbar expand="lg" className="bg-body-white">
        <Container>
          <Navbar.Brand href="#home">dataMindHub</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginBottom: "10px" }}
          />
          {/* 토글로 전환 시 요소 간 간격이 있으면 좋겠음 */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{ fontSize: "20px", color: "#0D0C22" }}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ fontSize: "20px", color: "#0D0C22" }}
              >
                Post
              </Nav.Link>
            </Nav>
            <Nav>
              {/* 로그인 전 */}
              <button className="Button Login" style={{ marginRight: "6px" }}>
                Login
              </button>
              <button className="Button">Sign Up</button>

              {/* 로그인 후 */}
              <button className="Button" style={{ marginRight: "6px" }}>
                My Page
              </button>
              <button className="Button Login">Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
