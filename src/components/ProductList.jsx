import { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBtnClick = () => {
    addToCart(product);
    setIsAdded(true);
    // Returns to "Buy Now" after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 text-left hover:shadow-2xl transition-all relative group">
      <span className={`absolute top-6 right-6 text-[10px] font-black uppercase px-3 py-1 rounded-full ${product.tagType === 'popular' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
        {product.tag}
      </span>
      <img src={product.icon} alt={product.name} className="w-14 h-14 mb-6" />
      <h4 className="text-xl font-bold mb-2">{product.name}</h4>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
      <div className="text-3xl font-black text-gray-900 mb-6">
        ${product.price} <span className="text-sm text-gray-400 font-medium">/{product.period}</span>
      </div>
      <ul className="mb-8 space-y-3">
        {product.features.map((f, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-purple-600 font-bold">✔</span> {f}
          </li>
        ))}
      </ul>
      <button 
        onClick={handleBtnClick}
        disabled={isAdded}
        className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${isAdded ? 'bg-green-500 text-white' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
        {isAdded ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;