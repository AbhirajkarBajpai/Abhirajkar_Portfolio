import "./App.css";
import Navbar from "./components/header/Navbar";
import Profile_Pic from './assets/img/Ab.jpg';

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navbar />
        <div className="profile-section">
          <img src={Profile_Pic} alt="Profile" className="profile-pic" />
          <span className="Headling_about">Building Websites, DAPPS , learning Fullstack, Blockchain, Trying Photography </span>
          <button
            className="project-button"
            onClick={() =>
              window.open("https://github.com/AbhirajkarBajpai?tab=repositories", "_blank")
            }
          >
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
