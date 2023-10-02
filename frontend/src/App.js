import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./components/MainPage";
import { Routes, Route, Link } from 'react-router-dom'
import MyPage from "./components/MyPage";
import PostList from "./components/Post";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element= { <MainPage/> }/> 
        <Route path="/mypage" element= { <MyPage/> }/> 
        <Route path="/list" element= { <PostList/> }/> 
      </Routes>
      
    </>
  );
}

export default App;
