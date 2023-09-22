import Slide from './Slide';

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage-Header">
        <p className="Title">dataMindHub💫</p>
        <p className="Title Sub">We Realize Your Demands, No Matter What</p>
        <img src="Icons.png" style={{ width: "100%" }} />
      </div>
      <div className="MainPage-Body1">
        <p className="Body1 Title">Hosting Notion</p>
        <p className="Body1 Title Sub">
          노션 페이지 링크만 입력하면 바로 배포 가능!
        </p>
        <p>노션 아이콘 큰거 + 케러셀:우리 사이트 사용 모습</p>
      </div>
      <div className="MainPage-Body3">
        <p className="Body3 Title">코딩노예들</p>
        <Slide/>
      </div>
      <div className="MainPage-Body4">
        <p className="Body4 Title">반응형 웹사이트임</p>
        <p>자랑질 주저리 주저리...</p>
      </div>
    </div>
  );
}

export default MainPage;
