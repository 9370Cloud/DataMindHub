import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./components/MainPage";
import { Routes, Route, Link } from 'react-router-dom'
import MyPage from "./components/MyPage";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element= { <MainPage/> }/> 
        <Route path="/mypage" element= { <MyPage/> }/> 
      </Routes>
      
    </>
  );
}

export default App;
