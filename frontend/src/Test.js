import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "react-typewriter";

function Test() {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ height: "400px" }}
    >
      <h1 style={{ margin: "auto" }} id="slogan">
        <Typewriter
          delay={50}
          typing={0.5}
          minDelay={25}
          maxDelay={100}
        >
          "흑백 배경에 큰따옴표, 대충 아무 글귀나 쓰면 명언같다."
        </Typewriter>
      </h1>
    </Container>
  );
}

export default Test;
