import React from "react";
import "./Navbar.css";

const Navbar = ({ cartCount, setView }) => (
  <nav className="navbar">
    <div className="navbar-inner">
   
      <div className="navbar-logo" onClick={() => setView('product')}>
        DigiTools
      </div>

      <div className="navbar-links">
        <a href="#">Products</a>

        <a href="#">Features</a>

        <a href="#">Pricing</a>
        
        <a href="#">Testimonials</a>

        <a href="#">FAQ</a>
      </div>

      
      <div className="navbar-actions">
    
        <div className="cart-icon" onClick={() => setView('cart')}>
          <img

            src="assets/products/shopping-cart.png"
            alt="Cart"
            className="cart-image"
          />


          {cartCount > 0 && (
            
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>

        <p>Login </p>
        <button className="login-btn"> Get started </button>
      </div>
    </div>
  </nav>
);

export default Navbar;