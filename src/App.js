import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navbar />
        <div className="profile-section">
          <img src="your-photo-url" alt="Profile" className="profile-pic" />
          <p className="bold-text">Your First Line</p>
          <p className="bold-text">Your Second Line</p>
          <button
            className="project-button"
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
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
