import "./App.css";
import Navbar from "./components/header/Navbar";
import Profile_Pic from "./assets/img/Ab.jpg";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navbar />
        <div className="profile-section">
          <div className="PN_cont">
            <img src={Profile_Pic} alt="Profile" className="profile-pic" />
            <div className="name_cont">
              <span className="name_header">Abhirajkar Bajpai</span>
            </div>
          </div>
          <span className="Headling_about">
            Building Websites, DAPPS , learning Fullstack, Blockchain, Trying
            Photography{" "}
          </span>
          <button
            className="project-button"
            onClick={() =>
              window.open(
                "https://github.com/AbhirajkarBajpai?tab=repositories",
                "_blank"
              )
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
