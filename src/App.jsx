import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fixed Relative Imports
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const [view, setView] = useState('product');

  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("This item is already in your cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Proceeding to checkout... Cart cleared!");
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cart.length} setView={setView} />
      <Banner />
      <Stats />

      <section className="app-main-section">
        <div className="app-content-wrapper">
          
          <h2 className="app-section-title">Premium Digital Tools</h2>
          <p className="app-section-desc">
            Choose from our curated collection of premium digital products designed<br/> to boost your productivity and creativity.
          </p>

          <div className="app-toggle-buttons">
            
            <button 
              onClick={() => setView('product')}
              className={`app-toggle-btn ${view === 'product' ? 'app-toggle-active' : ''}`}
            >
              Products
              
            </button>
            <button 
              onClick={() => setView('cart')}
              className={`app-toggle-btn ${view === 'cart' ? 'app-toggle-active' : ''}`}
            >
              Cart ({cart.length})
            </button>
            
          </div>

          {view === 'product' ? (
            <ProductList products={products} addToCart={addToCart} />
          ) : (
            <Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
          )}
        </div>
        
      </section>

      <Steps />
      
      <Pricing />
      
      <CTASection />
      <Footer />
      
      <ToastContainer />
      
    </div>
  );
};

export default App;