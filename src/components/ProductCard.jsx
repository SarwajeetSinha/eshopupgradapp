import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ProductCard.css';

const ProductCard = ({ productName, price, imageUrl, id }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} />
      <div className="product-details">
        <h3>{productName}</h3>
        <p>Price: ${price}</p>
      </div>
      <Link to={`/detail/${id}`}>
        {/* Use Link to navigate to the product detail page */}
        <button className="buy-button">Buy
        <Link to="/detail" params={{ id: id }}>ProductDetail</Link>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
