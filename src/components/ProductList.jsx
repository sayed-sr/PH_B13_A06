import { useState } from "react";
import "./ProductList.css";

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBtnClick = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <span className={`product-tag ${product.tagType === 'popular' ? 'tag-popular' : 'tag-standard'}`}>
        {product.tag}
      </span>
      <img src={product.icon} alt={product.name} className="product-icon" />
      <h4 className="product-name">{product.name}</h4>
      <p className="product-description">{product.description}</p>
      <div className="product-price">
        ${product.price} <span className="product-period">/{product.period}</span>
      </div>
      <ul className="product-features">
        {product.features.map((f, i) => (
          <li key={i} className="feature-item">
            <span className="feature-check">✔</span> {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleBtnClick}
        disabled={isAdded}
        className={`product-btn ${isAdded ? 'added' : ''}`}
      >
        {isAdded ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;