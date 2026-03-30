import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, handleCheckout }) => {
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h3 className="cart-title">Your Cart</h3>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-text">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.icon} className="cart-item-icon" alt={item.name} />
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart-item-remove"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">${totalCost}</span>
          </div>

          <button onClick={handleCheckout} className="cart-checkout-btn">
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;