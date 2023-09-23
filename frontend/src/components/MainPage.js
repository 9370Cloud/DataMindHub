import Slide from "./Slide";
import NotionSVG from "./NotionSVG";
import Divider from "./Divider";

function MainPage() {
  return (
    <>
      <div className="MainPage Header">
        <NotionSVG />
        <p className="Title MainPage-Title">
          First Project : Hosting Notion
        </p>
        <p className="MaingPage-Sub Sub">페이지 주소로 바로 포스팅 가능!</p>
        <p className="MaingPage-Sub2 Sub">진짜냐구요?</p>
        <button className="Button">Get Started!</button>
      </div>
      <div className="MainPage Solution">
        <p className="Solution-Title Title">Hosting Solution</p>
        <img src="Solution.png" style={{ width: "100%" }} alt="TechStacks" />
      </div>
      <div className="MainPage TechStacks">
        <p className="Title">Tech Stacks</p>
        <img src="Icons.png" style={{ width: "100%" }} alt="TechStacks" />
        {/* img 태그는 alt 속성 갖고 있어야 warning 안 뜸  */}
        {/* 사진 추후에 업그레이드 할 예정임 */}
      </div>
      <div className="MainPage Responsive">
        <p className="Responsive-Title Title">Responsive Website</p>
        <p className="Responsive-Sub Sub" style={{fontFamily:'pacifico'}}>PC, Tablet, Mobile anywhere</p>
        <p className="Sub">궁금하면 다른 기기로 들어와보던지</p>
      </div>

  
        <div className="MainPage Members">
          <p className="Members-Title Title">
            Le Miserable
          </p>
          <p className="Members-Sub Sub">Coding Slaves</p>
          <Slide />
      </div>
      <Divider/>
      <div className="Footer">
        깃헙 아이콘을 비롯한 각종 링크 아이콘
      </div>
    </>
  );
}

export default MainPage;
