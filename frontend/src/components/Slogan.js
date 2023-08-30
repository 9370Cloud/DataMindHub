import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TypeIt from 'typeit';

function Slogan() {
  useEffect(() => { // 세 번씩 보이는 거 수정해야됨
    new TypeIt('#slogan-text', {
      strings: "뭔가 멋있는 맨트입니다",
      speed: 50, // 타이핑 속도
      waitUntilVisible: true, // 보여질 때까지 기다리기
    }).go();
  }, []);

  return (
    <Container className="d-flex justify-content-center" style={{height:'400px'}}>
      <h1 id="slogan-text" style={{ margin: 'auto' }}></h1>
    </Container>
  );
}

export default Slogan;
