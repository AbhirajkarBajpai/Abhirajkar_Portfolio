import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img/Fraud_Detection.png";
import img2 from "../../assets/img/EVM.png";
import img3 from "../../assets/img/onLibrary.png";
import img4 from "../../assets/img/Contri.png";
import img5 from "../../assets/img/Draww.jpg";
import "./Portfolio.css";

const Portfolio = (props) => {
  const [projects] = useState([
    // {
    //   image: img1,
    //   title: "Bank Financial Transaction Fraud Investigation WebApp",
    //   description:
    //     "In this Webapp Developed a comprehensive Fraud Detection Web App to identify and flag potentially fraudulent transactions in a ...",
    //   link: "https://github.com/AbhirajkarBajpai/Fraud_detection_Webapp",
    // },
    {
      image: img4,
      title: "Contri: Expense Splitting WebApp",
      description:
        "The Webapp Developed with added advanced group management features to divide spending, alter manual amounts, and view real-time summary...",
      link: "https://github.com/AbhirajkarBajpai/contri",
    },
    {
      image: img5,
      title: "Draww: Interactive Game",
      description:
        "Draww is an interactive and creative game that provides a fun and engaging way to challenge friends by creating and solving drawing-based puzzles",
      link: "https://github.com/AbhirajkarBajpai/Draww",
    },
    {
      image: img2,
      title: "Blockchain-Based Electronic Voting Dapp",
      description:
        "This project is a Distributed Application (Dapp) built on the Ethereum blockchain for conducting electronic voting. The goal of this Dapp is to ensure the transparency...",
      link: "https:github.com/AbhirajkarBajpai/E-Voting_Dapp",
    },
    // {
    //   image: img3,
    //   title: "OnLibrary-online Book Reading Platform",
    //   description:
    //     "I have Created full-stack e-book reader that allows users to read and bookmark a diverse selection of books online....",
    //   link: "https://github.com/AbhirajkarBajpai/OnLibrary-E-Book-Reader-",
    // },
  ]);

  // Track current page
  const [currentPage, setCurrentPage] = useState(1);

  // Track screen width and cards per page
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update cards per page based on screen width
  useEffect(() => {
    if (screenWidth <= 600) {
      setCardsPerPage(1);
    } else if (screenWidth <= 1024) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(3);
    }
  }, [screenWidth]);

  // Pagination handler
  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  // Calculate visible projects
  const visibleProjects = projects.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="portfolio_contn">
      <div className="upperSection_pc">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leftPart_pc"
        >
          <span>My Portfolio</span>
          <span>
            Latest
            <br />
            Cases
          </span>
        </motion.div>
        <div className="rightPart_pc">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="search-container"
          >
            <input
              type="text"
              placeholder="Search cases..."
              className="search-input"
            />
            <span className="search-icon">&#x2197;</span>
          </motion.div>
        </div>
      </div>

      <div className="lowerSection_pc">
        {visibleProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.3 }} 
            key={index}
            onClick={() => window.open(project?.link)}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="pagination_pc">
        <div className="pagination-dots">
          <span
            style={{ color: "white", cursor: "pointer", fontSize: "2rem" }}
            onClick={() => {
              if (currentPage > 1) handlePagination(currentPage - 1);
            }}
          >
            &lt;
          </span>

          {Array.from({
            length: Math.ceil(projects.length / cardsPerPage),
          }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handlePagination(index + 1)}
            ></span>
          ))}

          <span
            style={{ color: "white", cursor: "pointer", fontSize: "2rem" }}
            onClick={() => {
              if (currentPage < Math.ceil(projects.length / cardsPerPage))
                handlePagination(currentPage + 1);
            }}
          >
            &gt;
          </span>
        </div>

        <div
          className="project_btn"
          onClick={() => {
            props.setIsAllProjOpen();
          }}
        >
          View All Cases
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
