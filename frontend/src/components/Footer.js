import React from "react";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <h2>
          페이지 마지막에 주소랑 이름이랑 전화번호 이거저거 있는 파트 (Footer)
        </h2>
      </Container>
    </Container>
  );
}

export default Footer;
