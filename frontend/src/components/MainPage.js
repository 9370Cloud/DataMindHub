import Slide from "./Slide";
import NotionSVG from "./NotionSVG";
import React, { useState, useEffect, useRef } from "react";

function MainPage() {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // 화면에 50% 이상 보일 때 콜백 실행
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === targetRef1.current) {
          setIsVisible1(entry.isIntersecting);
        } else if (entry.target === targetRef2.current) {
          setIsVisible2(entry.isIntersecting);
        } else if (entry.target === targetRef3.current) {
          setIsVisible3(entry.isIntersecting);
        } else if (entry.target === targetRef4.current) {
          setIsVisible4(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (targetRef1.current) {
      observer.observe(targetRef1.current);
    }
    if (targetRef2.current) {
      observer.observe(targetRef2.current);
    }
    if (targetRef3.current) {
      observer.observe(targetRef3.current);
    }
    if (targetRef4.current) {
      observer.observe(targetRef4.current);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="MainPage Header">
        <div
          className={`target ${isVisible1 ? "visible" : ""}`}
          ref={targetRef1}
        >
          <NotionSVG />
        </div>
        <p className="Title MainPage-Title">First Project : Hosting Notion</p>
        <p className="MaingPage-Sub Sub">페이지 주소로 바로 포스팅 가능!</p>
        <p className="MaingPage-Sub2 Sub">진짜냐구요?</p>
        <button className="Button">Get Started!</button>
      </div>
      <div className="MainPage Solution">
        <p className="Solution-Title Title">Hosting Solution</p>
        <div
          className={`target ${isVisible2 ? "visible" : ""}`}
          ref={targetRef2}
        >
          <img src="Solution.png" style={{ width: "100%" }} alt="Solution" />
        </div>
      </div>
      <div className="MainPage TechStacks">
        <p className="Title">Tech Stacks</p>
        <div
          className={`target ${isVisible3 ? "visible" : ""}`}
          ref={targetRef3}
        >
          <img src="Icons.png" style={{ width: "100%" }} alt="TechStacks" />
          {/* img 태그는 alt 속성 갖고 있어야 warning 안 뜸  */}
          {/* 사진 추후에 업그레이드 할 예정임 */}
        </div>
      </div>
      <div className="MainPage Responsive">
        <p className="Responsive-Title Title">Responsive Website</p>
        <p className="Responsive-Sub Sub" style={{ fontFamily: "pacifico" }}>
          PC, Tablet, Mobile anywhere
        </p>
        <p className="Sub">궁금하면 다른 기기로 들어와보던지</p>
      </div>

      <div className="MainPage Members">
        <p className="Members-Title Title">Coding Slaves</p>
        <div
          className={`target ${isVisible4 ? "visible" : ""}`}
          ref={targetRef4}
        >
          <Slide />
        </div>
      </div>
      <div className="Footer">
        <div class="glowingIconsContainer">
          <i class="fa fa-apple" id="apple"></i>
          <i class="fa fa-twitter" id="twitter"></i>
          <i class="fa fa-github-square github" id="github"></i>
          <i class="fa fa-facebook-square" id="facebook"></i>
        </div>
      </div>
    </>
  );
}

export default MainPage;
