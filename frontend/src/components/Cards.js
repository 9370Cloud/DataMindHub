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
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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
