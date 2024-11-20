import React from 'react';
import './ContactSection.css';
import handshakeImage from '../../assets/img/handshake_Img.webp';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <img src={handshakeImage} alt="Handshake" className="handshake-image" />
      <span>Tell me about your next project</span>
      <div className="button-container">
        <button className="email-button" onClick={() => window.open('mailto:21IT3001@rgipt.ac.in', '_blank')}>📧 Email Me</button>
        <button className="whatsapp-button" onClick={() => window.open('https://wa.me/9369930609', '_blank')}>WhatsApp</button>
      </div>
    </div>
  );
};

export default ContactSection;
