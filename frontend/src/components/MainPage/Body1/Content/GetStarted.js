import { Button, Container } from "react-bootstrap";

function GetStarted() {
  return (
    <Container className="d-flex flex-column align-items-center">
      <p className="text-center">우리의 다양한 프로젝트를 경험해보세요!</p>
      <Button variant="warning" style={{ borderRadius: "13px" }}>
        Get Started Now
      </Button>{" "}
      {/* 버튼 누르면 로그인 모달 등장 */}
    </Container>
  );
}

export default GetStarted;
