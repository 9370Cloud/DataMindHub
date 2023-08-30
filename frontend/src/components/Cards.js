import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function Cards() {
  const cardStyle = {
    display: "inline-block",
    width: "18rem",
    margin: "0 10px 20px 0", // 카드 사이의 간격 조정
    verticalAlign: "top", // 카드 상단 정렬
  };

  const card = (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src="https://i.namu.wiki/i/Bbq0E9hXYyrXbL4TnIE__vtQ2QwiZ3i40NZSLiX_a6S0ftYCndVZjf4vlruWur4I3Z0o7CZuFrRMl2CKxyk30w.webp"
      />
      <Card.Body>
        <Card.Title>제목 쓰는 곳</Card.Title>
        <Card.Text>
          하 이거 어느세월에 완성하고 배포하냐
        </Card.Text>
        <Button variant="danger">자폭</Button>
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <h2>Posts (바디3)</h2>
      </Container>
      {card}
      {card}
      {card}
      {card}
      {card}
    </Container>
  );
}

export default Cards;
