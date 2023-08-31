import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Splitting from "splitting"; // Splitting 라이브러리 import
import ScrollOut from "scroll-out"; // scroll-out 라이브러리 import

function Cards() {
  const cardStyle = {
    display: "inline-block",
    width: "19%",
    margin: "0 10px 20px 0",
    verticalAlign: "top",
  };

  const cardsArray = new Array(10).fill(null);

  useEffect(() => {
    // Splitting 라이브러리 초기화
    Splitting();
    // ScrollOut 라이브러리 초기화
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true,
      },
    });
  }, []);

  return (
    <Container className="m-5">
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        {" "}
      </Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cardsArray.map((_, index) => (
          <Card key={index} style={cardStyle} data-scroll>
            {/* 데이터 속성 추가 */}
            <Card.Img
              variant="top"
              src="https://i.namu.wiki/i/Bbq0E9hXYyrXbL4TnIE__vtQ2QwiZ3i40NZSLiX_a6S0ftYCndVZjf4vlruWur4I3Z0o7CZuFrRMl2CKxyk30w.webp"
              data-scroll
            />
            <Card.Body data-scroll>
              <Card.Title data-scroll>제목 쓰는 곳</Card.Title>
              <Card.Text data-scroll>하 이거 어느세월에 완성하고 배포하냐</Card.Text>
              <Button variant="danger" data-scroll>자폭</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Cards;
