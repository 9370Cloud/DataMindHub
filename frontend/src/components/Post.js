import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function PostList() {
  return (
    <div className="PostPage">
      {/* Header */}
      <header className="py-5">
        <Container>
          <Card className="p-4 p-lg-5rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold" style={{ color: '#0d0c22'}}>글 목록</h1>
              <p className="PostNotice" style={{ color: '#0d0c22', marginBottom:'3%'}}>
                노션 페이지 내부의 '링크', '페이지', '데이터베이스'는 지원하지
                않습니다.
              </p>
              <button className="Button">작성하기</button>
            </div>
          </Card>
        </Container>
      </header>

      {/* Page Content */}
      <section className="pt-4">
        <Container>
          {/* Page Features */}
          <Row>
            <Col lg={4} md={6} sm={6} className="mb-5">
              <Card className="bg-light border-0 h-100">
                <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <Image
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18aeeb1e747%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18aeeb1e747%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.921875%22%20y%3D%2294.5%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    rounded
                    className="PostImage"
                  />
                  <h2 className="fs-4 fw-bold" style={{ color: '#0d0c22'}}>글 제목</h2>
                  <p className="mb-0" style={{ color: '#0d0c22'}}>작성자명, 작성된 시간</p>
                </Card.Body>
              </Card>
            </Col>
            
            
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default PostList;
