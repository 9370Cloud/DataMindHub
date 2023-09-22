import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="Wrapper">
        <MainPage />
      </div>
    </>
  );
}

export default App;
