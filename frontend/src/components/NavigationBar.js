import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

  const navigate = useNavigate();

  return (
    <div className="NavigationBar">
      <Navbar
        expand="lg"
        className="bg-body-white"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Navbar.Brand
            style={{ fontWeight: "300", color: "#0d0c22", fontFamily: "Pacifico" }}
            // className="testNeonGlow"
            onClick={() => navigate('/')}
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
                style={{
                  fontSize: "20px",
                  color: "#0d0c22",
                  fontFamily: "Pacifico",
                }}
                
              >
                Post
              </Nav.Link>

              <Nav.Link
                style={{
                  fontSize: "20px",
                  color: "#0d0c22",
                  fontFamily: "Pacifico",
                }}
                onClick={() => {window.location.href = '/post';}}
              >
                Post test
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
