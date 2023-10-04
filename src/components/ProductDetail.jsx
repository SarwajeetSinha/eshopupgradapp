import React, { useState } from 'react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    // You can implement your cart functionality here
    // For this example, we'll just show an alert
    alert(`Added ${quantity} items to the cart`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src="product-image.jpg" alt="Product" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Category: Apparel</p>
        <p>Shoes Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="quantity-control">
          <button onClick={increaseQuantity}>+</button>
          <span>{quantity}</span>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
