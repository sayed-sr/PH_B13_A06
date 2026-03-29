const Navbar = ({ cartCount, setView }) => (
  <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100] shadow-md">
    <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-16 py-4">
      {/* Logo */}
      <div 
        className="text-2xl font-black text-purple-600 cursor-pointer flex items-center gap-2" 
        onClick={() => setView('product')}
      >
        DigiTools
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 items-center text-gray-600 font-semibold text-sm">
        <a href="#" className="hover:text-purple-600 transition">Products</a>
        <a href="#" className="hover:text-purple-600 transition">Features</a>
        <a href="#" className="hover:text-purple-600 transition">Pricing</a>
        <a href="#" className="hover:text-purple-600 transition">FAQ</a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 items-center">
        {/* 🛒 Cart Icon */}
        <div 
          className="relative cursor-pointer group" 
          onClick={() => setView('cart')}
        >
          <img 
            src="assets/products/shopping-cart.png" 
            alt="Cart" 
            className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" 
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {cartCount}
            </span>
          )}
        </div>

        {/* Login Button */}
        <button className="bg-gray-900 text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-purple-600 transition-colors shadow-md shadow-gray-200">
          Login
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;