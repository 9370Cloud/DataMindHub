import React, { useState } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
// 버튼 모양 바꿔야됨

const MAX_VISIBILITY = 3;

const Card = ({ content }) => <div className="card1">{content}</div>;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel1">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container1"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const person1 = <>123</>;
const person2 = <>123</>;
const person3 = (
  <>
    <div style={{textAlign:'center'}}>
      <p>이름 : 김승혁</p>
      <p>직업 : 백수</p>
      <p>취미 : 컴퓨터</p>
      <p>용돈 받음</p>
    </div>
  </>
);
const person4 = <>123</>;
const person5 = <>123</>;

const Slide = () => (
  <div className="SlideWrapper">
    <Carousel>
      <Card title="123" content={person1} />
      <Card title="123" content={person2} />
      <Card title="123" content={person3} />
      <Card title="123" content={person4} />
      <Card title="123" content={person5} />
    </Carousel>
  </div>
);
export default Slide;
