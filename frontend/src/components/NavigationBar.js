import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <Navbar
        expand="lg"
        className="bg-body-white"
        style={{ backgroundColor: "#222222" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "300", color: "#fff", fontFamily: "Pacifico" }}
            className="testNeonGlow"
          >
            dataMindHub
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginBottom: "10px" }}
          />
          {/* 토글로 전환 시 요소 간 간격이 있으면 좋겠음 */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  fontFamily: "Pacifico",
                }}
                className="testNeonGlow"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  fontFamily: "Pacifico",
                }}
                className="testNeonGlow"
              >
                Post
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  fontFamily: "Pacifico",
                }}
                className="testNeonGlow"
              >
                Donation
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  fontFamily: "Pacifico",
                }}
                className="testNeonGlow"
              >
                NotFound
              </Nav.Link>
            </Nav>
            <Nav>
              {/* 로그인 전 */}
              <LoginModal />

              {/* 로그인 후 */}
              <button className="Button" style={{ marginRight: "6px" }}>
                My Page
              </button>
              <button className="Button Login">Log out</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
