import './App.css';
import Header from './components/Header'; 
import MainContent from './components/MainContent'; // 바디 각 파트 모아놓음
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
