import React from 'react';
import MyTabs from './Tabs';
import ProductCard from './ProductCard';
import productData from './ProductData';

const Home = () => {
  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  return (
    <div>
      <h1>Home Page</h1>
      <MyTabs tabLabels={tabLabels} />
      <div style={{ display: "flex", flexDirection: 'row' }}>
        {productData.map((product, index) => (
          <div key={index}>
          
              <ProductCard {...product} />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
