import "./App.css";
import Navbar from "./components/header/Navbar";
import Profile_Pic from "./assets/img/Ab.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MovingExperience from "./components/MovingExperience";
import Cursor from "./components/CursorDot";
import SkillsSection from "./components/SkillSection/Skills";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import MovingSkills from "./components/MovingSkill/MovingSkills";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectPage from "./components/AllProjects/ProjectPage";

function App() {
  const [isAllProjOpen, setIsAllProjOpen] = useState(false);

  useEffect(() => {
    const handlePopState = (event) => {
      if (isAllProjOpen) {
        setIsAllProjOpen(false);
      } else {
        window.history.go(-1);
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isAllProjOpen]);

  const openAllProjects = () => {
    setIsAllProjOpen(true);
    window.scroll(0, 0);
    window.history.pushState({ isAllProjOpen: true }, "");
  };
  return (
    <div className="App">
      <Cursor />
      {!isAllProjOpen && (
        <>
          <div style={{ backgroundColor: "#222222", height: "100%" }}>
            <div id="top-pf" className="home">
              <Navbar />
              <div className="profile-section">
                <div className="PN_cont">
                  <img
                    src={Profile_Pic}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <div className="name_cont">
                    <span className="name_header">Abhirajkar Bajpai 👋</span>
                  </div>
                </div>
                <span className="Headling_about">
                  {window.outerWidth < 800
                    ? "Building Websites, DApps, products and experience"
                    : "Building Websites, Decentralised applications, doing photography"}
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
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </button>
              </div>
            </div>
          </div>
          <MovingExperience />
          <SkillsSection />
          <Education />
          <MovingSkills />
          <Portfolio setIsAllProjOpen={openAllProjects} />
          <ContactSection />
        </>
      )}
      {isAllProjOpen && <ProjectPage />}
      <Footer />
    </div>
  );
}

export default App;
