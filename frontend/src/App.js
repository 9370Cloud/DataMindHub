import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./components/MainPage";
import { Routes, Route, Link } from 'react-router-dom'
import MyPage from "./components/MyPage";
import List from "./components/List";
import Notion from "./components/Notion";
import { useSelector } from 'react-redux';

function App() {

  const pageId = useSelector((state) => state.pageId);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element= { <MainPage/> }/> 
        <Route path="/mypage" element= { <MyPage/> }/> 
        <Route path="/list" element= { <List/> }/>
        <Route path="/post" element= { <Notion /> }/>
      </Routes>
      
    </>
  );
}

export default App;
