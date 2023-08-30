import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

function Slogan() {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ height: "400px" }}
    >
      <h1 style={{ margin: "auto" }}>
        "흑백 배경에 큰따옴표, 대충 아무 글귀나 쓰면 명언같다." (바디1)
      </h1>
    </Container>
  );
}

export default Slogan;
