import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
