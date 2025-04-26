import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Products from '../data/Products';

const categories = ['All', 'Fruits', 'Grains', 'Livestock', 'Tools'];
const priceOptions = ['All', 'Under 100', '100 - 500', 'Over 500'];

function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const navigate = useNavigate();

  const filteredProducts = Products.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchPrice =
      selectedPrice === 'All' ||
      (selectedPrice === 'Under 100' && product.price < 100) ||
      (selectedPrice === '100 - 500' && product.price >= 100 && product.price <= 500) ||
      (selectedPrice === 'Over 500' && product.price > 500);

    return matchCategory && matchPrice;
  });

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          {/* Category Filter */}
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-gray-700 mb-2">Filter by Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === cat ? 'bg-green-700 text-white' : 'text-green-800 border-green-800'
                  } transition`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-gray-700 mb-2">Filter by Amount</p>
            <select
              value={selectedPrice}
              onChange={e => setSelectedPrice(e.target.value)}
              className="border border-green-800 rounded-full px-4 py-2 text-green-800"
            >
              {priceOptions.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtered By Information */}
        <div className="mb-6">
          <p className="text-gray-700">
            <strong>Filtering by:</strong>
            <span className="font-medium"> {selectedCategory !== 'All' ? `Category: ${selectedCategory}` : 'All Categories'}</span>
            {selectedPrice !== 'All' && selectedCategory !== 'All' ? ' | ' : ''} 
            <span className="font-medium"> {selectedPrice !== 'All' ? `Price: ${selectedPrice}` : 'All Prices'}</span>
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="bg-[#fefdf7] rounded-2xl shadow p-4 relative cursor-pointer hover:shadow-lg transition"
            >
              {/* Favorite */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-green-100 z-10"
                onClick={e => e.stopPropagation()} // prevent from opening details
              >
                <FaHeart className="text-green-600 text-sm" />
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                <p className="text-green-600 font-medium">
                  Ksh {product.price.toLocaleString()} / {product.priceUnit}
                </p>
                <p className="text-sm text-gray-600 mt-1">{product.desc}</p>

                {/* Add to Cart */}
                <button
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
                  onClick={e => {
                    e.stopPropagation(); // prevent opening details when clicking add to cart
                    // handle add to cart logic here
                  }}
                >
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found for this filter.</p>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
