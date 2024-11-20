import React from "react";
import "./Footer.css";
import profile from "../../assets/img/Ab_2.jpg";

const Footer = () => {
  const scrollToTop = () => {
    const topSection = document.getElementById("top-pf");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="portfolio_footer">
      <div className="footer_container">
        <div className="footer-section2">
          <div class="content_FS2">
            <span>I would love to hear on me.</span>
            <span>
              Feel free to reach out if you want to collaborate with me, or
              simply have a chat.
            </span>
          </div>
          {window.outerWidth > 500 && (
            <>
              <div className="footer-section2_contInfo">
                <div class="location">
                  <img
                    src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/64f38a97f86ad4f417b4156b_icon-location-white.svg"
                    loading="lazy"
                    alt="Icon location"
                    class="location-icon"
                    _mstalt="203593"
                    _msthash="197"
                  />
                  <span class="location-text">BANGLORE, INDIA</span>
                </div>
                <div class="social-icons">
                  <a href="https://www.linkedin.com" target="_blank">
                    <img
                      src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
                      loading="lazy"
                      alt="LinkedIn"
                      _mstalt="107016"
                      _msthash="199"
                    />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <img
                      src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
                      loading="lazy"
                      alt="Instagram"
                      _mstalt="134732"
                      _msthash="200"
                    />
                  </a>
                </div>
              </div>
              <div class="copyright">
                © Abhirajkar 2024. All rights reserved
              </div>
            </>
          )}
        </div>
        <div className="footer-section">
          <div className="footer-section_in">
            <div className="footer_profile_cont">
              <img
                className="footer_profile_img"
                src={profile}
                alt="profile_img"
              />
            </div>
            <div className="footer_about">
              <span>Abhirajkar</span>
              <span>Blockchain, Smart contract & Web Developer</span>
            </div>
          </div>
          <div className="footer-section_in2">
            <div style={{ display: "flex", alignItems: "center", gap: ".6vw" }}>
              <span className="email_foot">21IT3001@rgipt.ac.in</span>
              <div class="btn-second-smallsquare"></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".6vw" }}>
              <a
                href="tel:+919369930609"
                className="tele_foot"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="btn-secondary-inner">
                  <div>+91 93 69 930 609</div>
                </div>
              </a>
              <div className="btn-second-smallsquare"></div>
            </div>
          </div>
          <div className="back-to-top" onClick={scrollToTop}>
            Back to the top ↑
          </div>
        </div>
        {window.outerWidth <= 500 && (
            <>
              <div className="footer-section2_contInfo">
                <div class="location">
                  <img
                    src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/64f38a97f86ad4f417b4156b_icon-location-white.svg"
                    loading="lazy"
                    alt="Icon location"
                    class="location-icon"
                    _mstalt="203593"
                    _msthash="197"
                  />
                  <span class="location-text">BANGLORE, INDIA</span>
                </div>
                <div class="social-icons">
                  <a href="https://www.linkedin.com" target="_blank">
                    <img
                      src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
                      loading="lazy"
                      alt="LinkedIn"
                      _mstalt="107016"
                      _msthash="199"
                    />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <img
                      src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
                      loading="lazy"
                      alt="Instagram"
                      _mstalt="134732"
                      _msthash="200"
                    />
                  </a>
                </div>
              </div>
              <div class="copyright">
                © Abhirajkar 2024. All rights reserved
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default Footer;
