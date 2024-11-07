import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* First Row of Menu Buttons */}
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => handleButtonClick('/')}>Home</button>
          <button style={styles.button} onClick={() => handleButtonClick('/about-us')}>About Us</button>
          <button style={styles.button} onClick={() => handleButtonClick('/privacy-policy')}>Privacy Policy</button>
        </div>
        {/* Second Row of Menu Buttons */}
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => handleButtonClick('/t&c')}>Terms & Conditions</button>
          <button style={styles.button} onClick={() => handleButtonClick('/contact')}>Contact</button>
        </div>
      </div>

      <div style={styles.socialMedia}>
        {/* Social Media Links */}
        <a href="https://www.facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.pinterest.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </a>
      </div>

      <div style={styles.copyright}>
        Copyright © Indiluckgame.com All Rights Reserved
      </div>
    </footer>
  );
};

// Styles for the footer and buttons
const styles = {
  footer: {
    backgroundColor: '#1e4ed6', // Set footer background color to blue
    color: 'white', // Set text color to white for better contrast
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column', // Arrange buttons in column
    alignItems: 'center', // Center align the buttons
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '15px', // Add space below button rows
  },
  button: {
    backgroundColor: '#1e4ed6', // Change button background color to white
    color: 'white', // Set button text color to blue
    border: '1px solid white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '15px', // Add space below social media icons
  },
  icon: {
    color: 'white', // Set icon color to white
    fontSize: '24px',
    textDecoration: 'none',
  },
  reserveButton: {
    backgroundColor: 'green', // Change color as needed
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  copyright: {
    marginTop: '20px', // Space above the copyright text
    fontSize: '14px', // Font size for copyright text
  },
};

export default Footer;
