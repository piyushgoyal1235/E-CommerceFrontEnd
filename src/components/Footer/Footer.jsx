import React from 'react'
import './Footer.css'
import footer from '../Assets/logo_big.png'
import { Link } from 'react-router-dom'
import ınns from '../Assets/ınsworks.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
