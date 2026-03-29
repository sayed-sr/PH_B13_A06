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
  <div className="w-full min-h-screen overflow-x-hidden">
  <Navbar cartCount={cart.length} setView={setView} />
  
  {/* The Banner now has its own padding-top to stay clear of the fixed Nav */}
  <Banner />
  <Stats />

      {/* Main Content Area - Full Width Background */}
      <section className="w-full py-20 px-6 md:px-20 text-center bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products.
            </p>
            
            <div className="inline-flex bg-white rounded-full p-1 border shadow-sm mb-16">
            <button 
                onClick={() => setView('product')} 
                className={`px-10 py-3 rounded-full font-bold transition ${view === 'product' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-500 hover:text-purple-600'}`}>
                Products
            </button>
            <button 
                onClick={() => setView('cart')} 
                className={`px-10 py-3 rounded-full font-bold transition ${view === 'cart' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-500 hover:text-purple-600'}`}>
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
    </div>
  );
};

export default App;