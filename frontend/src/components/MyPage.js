import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

function MyPage() {
  return (
    <div>
      <div className="MyPage1">
        <Card
          style={{
            width: "18rem",
            padding: "0",
            paddingTop: "3%",
            borderColor: "#0d0c22",
          }}
          className="MyPageCard"
        >
          <Row className="mx-auto">
            <Col xs={6} md={4}>
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18aee2d4507%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18aee2d4507%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.921875%22%20y%3D%2294.5%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                roundedCircle
              />
            </Col>
          </Row>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>myNickName</Card.Title>
            <Card.Title
              style={{
                textAlign: "right",
                margin: "0",
                padding: "0",
                marginTop: "10%",
              }}
            >
              <button className="Button" style={{ fontSize: "0.8rem" }}>
                Edit
              </button>
            </Card.Title>
          </Card.Body>
        </Card>

        <ListGroup>
          <ListGroup.Item
            style={{
              borderColor: "#0d0c22",
              backgroundColor: "#0d0c22",
              color: "white",
            }}
          >
            이름 : 김승혁
          </ListGroup.Item>
          <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
            소셜 로그인 : 구글
          </ListGroup.Item>
          <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
            최근 접속 시간 : 2023-10-02
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="MyPage2">
        <div>
          <ListGroup>
            <ListGroup.Item
              style={{
                borderColor: "#0d0c22",
                textAlign: "center",
                backgroundColor: "#0d0c22",
                color: "white",
              }}
            >
              내가 작성한 글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 1번글111111111111111111111111111
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 2번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 3번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 4번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 5번글
            </ListGroup.Item>
          </ListGroup>
          <div style={{ textAlign: "center" }}>
            <button
              className="Button"
              style={{ fontSize: "0.8rem", marginTop: "2%" , marginBottom:"5%"}}
            >
              더보기
            </button>
          </div>
        </div>

        <div>
          <ListGroup>
            <ListGroup.Item
              style={{
                borderColor: "#0d0c22",
                textAlign: "center",
                backgroundColor: "#0d0c22",
                color: "white",
              }}
            >
              좋아요 누른 글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 1번글2222222222222222222
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 2번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 3번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 4번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 5번글
            </ListGroup.Item>
          </ListGroup>
          <div style={{ textAlign: "center" }}>
            <button
              className="Button"
              style={{ fontSize: "0.8rem", marginTop: "2%", marginBottom:"5%" }}
            >
              더보기
            </button>
          </div>
        </div>

        <div>
          <ListGroup>
            <ListGroup.Item
              style={{
                borderColor: "#0d0c22",
                textAlign: "center",
                backgroundColor: "#0d0c22",
                color: "white",
              }}
            >
              내 댓글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 1번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 2번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 3번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 4번글
            </ListGroup.Item>
            <ListGroup.Item style={{ borderColor: "#0d0c22" }}>
              어쩌고 저쩌고 5번글
            </ListGroup.Item>
          </ListGroup>
          <div style={{ textAlign: "center" }}>
            <button
              className="Button"
              style={{ fontSize: "0.8rem", marginTop: "2%" }}
            >
              더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
