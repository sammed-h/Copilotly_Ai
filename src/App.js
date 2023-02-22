import "./App.css";
import ContentPage from "./Components/ContentPage";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";

function App() {
  return (
    <div>
      <div className="appMain">
        <Sidebar />
        <div className="appRightSide">
          <Header />
          <ContentPage />
        </div>
      </div>
    </div>
  );
}

export default App;
