import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">

      <div className="footer-grid">
    
        <div className="footer-brand">
          <h2 className="footer-brand-title">DigiTools</h2>


          <p className="footer-brand-desc">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div className="footer-column">


          <h4 className="footer-column-title">Product</h4>
          <ul className="footer-links">
            <li><a href="#">Features</a></li>


            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4 className="footer-column-title">Company</h4>
          <ul className="footer-links">


            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>

            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>


       
        <div className="footer-social">
          <h4 className="footer-column-title">Social Links</h4>
          <div className="footer-social-icons">
            {['instagram', 'facebook', 'twitter'].map((social) => (
              <a key={social} href="#" className="social-icon">
                <img 

                  src={`/src/assets/${social === 'twitter' ? 'X' : social}.png`} 
                  alt={social} 
                  className="social-icon-img" 

                />
              </a>
            ))}
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="footer-bottom-links">
          
          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;