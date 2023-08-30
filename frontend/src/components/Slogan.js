import React, { useEffect } from 'react';
import TypeIt from 'typeit';

function Slogan() {
  useEffect(() => {
    new TypeIt('#slogan-text', {
      strings: "뭔가 멋있는 맨트입니다",
      speed: 50, // 타이핑 속도
      waitUntilVisible: true, // 보여질 때까지 기다리기
    }).go();
  }, []);

  return (
    <div className="slogan-container">
      <h1 id="slogan-text"></h1>
    </div>
  );
}

export default Slogan;
