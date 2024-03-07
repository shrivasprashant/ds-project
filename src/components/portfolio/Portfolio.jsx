import React, { useState } from 'react';
import { products } from '../Home/project/portfolio';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? products.flatMap(category => category.items) // Return all items when "All" is selected
    : products.find(category => category.category === selectedCategory)?.items || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <button onClick={() => handleCategoryClick("All")} className={`mx-2 py-2 px-4 rounded-lg focus:outline-none ${selectedCategory === "All" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}>All</button>
        {products.map(category => (
          <button 
            key={category.category} 
            onClick={() => handleCategoryClick(category.category)} 
            className={`mx-2 py-2 px-4 rounded-lg focus:outline-none ${selectedCategory === category.category ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            {category.category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
