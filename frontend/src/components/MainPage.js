import Slide from "./Slide";
import NotionSVG from "./NotionSVG";
import { DividerBottom, DividerTop } from "./Divider";

function MainPage() {
  return (
    <>
      <div className="MainPage">
        <div className="MainPage-Header">
          <NotionSVG />
          <p className="Title" style={{ fontFamily: "pacifico" }}>
            Hosting Notion Page
          </p>
          <p className="Sub">노션 페이지 주소만 입력하면 바로 포스트 가능!</p>
          <p className="Sub">진짜냐구요?</p>
          <button className="Button">Get Started!</button>
        </div>
        <div className="MainPage-Body1">
          <p className="Title">Hosting Solution</p>
          <p className="Body1 Title Sub">
            리엑트 노션 데이터베이스 요청 응답 어쩌고 저쩌고 주저리 주저리...
            (대강 멋있는 관계도)
          </p>
        </div>
        <div className="MainPage-Body4">
          <p className="Body3 Title">Tech Stacks</p>
          <img src="Icons.png" style={{ width: "100%" }} alt="TechStacks" />
          {/* img 태그는 alt 속성 갖고 있어야 warning 안 뜸  */}
          {/* 사진 추후에 업그레이드 할 예정임 */}
        </div>
        <div className="MainPage-Body5">
          <p className="Body3 Title">반응형 웹사이트임</p>
          <p>PC, Tablet, Mobile</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0D0C22" }}>
        <DividerTop />
      </div>
      <div style={{ backgroundColor: "#0D0C22", width: "100%" }}>
        <div className="MainPage" style={{ padding: "0" }}>
          <div
            className="MainPage-Body3"
            style={{ paddingLeft: "15%", paddingRight: "15%" }}
          >
            <p className="Title" style={{color:"white"}}>🔥코딩노예들🔥</p>
            <Slide />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#0D0C22" }}>
        <DividerBottom />
      </div>
    </>
  );
}

export default MainPage;
