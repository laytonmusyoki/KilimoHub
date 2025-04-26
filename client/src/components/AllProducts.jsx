import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../data/Products';
import { addToCart } from '../features/cart/cartSlice';
import { addToFavorite, removeFromFavorite } from '../features/cart/favoriteSlice';
import { toast,ToastContainer } from 'react-toastify';

const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Livestock', 'Tools'];

const priceOptions = ['All', 'Under 100', '100 - 500', 'Over 500'];

function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorite.items);

  const filteredProducts = Products.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchPrice =
      selectedPrice === 'All' ||
      (selectedPrice === 'Under 100' && product.price < 100) ||
      (selectedPrice === '100 - 500' && product.price >= 100 && product.price <= 500) ||
      (selectedPrice === 'Over 500' && product.price > 500);

    return matchCategory && matchPrice;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToFavorite = (product) => {
    if (favorites.some(fav => fav.id === product.id)) {
      dispatch(removeFromFavorite(product.id)); 
      toast.success(`${product.name} removed from favorites!`);
    } else {
      dispatch(addToFavorite(product)); 
      toast.success(`${product.name} added to favorites!`);
    }
  };

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
              className="bg-[#fefdf7] rounded-2xl shadow p-4 relative hover:shadow-lg transition"
            >
              {/* Favorite */}
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow z-10 ${
                  favorites.some(fav => fav.id === product.id) ? 'bg-red-600' : 'bg-white hover:bg-green-100'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToFavorite(product);
                }}
              >
                <FaHeart
                  className={`text-sm ${favorites.some(fav => fav.id === product.id) ? 'text-white' : 'text-green-600'}`}
                />
              </button>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
                className="w-full h-60 sm:h-auto md:h-auto lg:h-52 object-cover rounded-xl cursor-pointer"
              />

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                <p className="text-green-600 font-medium">
                  Ksh {product.price.toLocaleString()} / {product.priceUnit}
                </p>
                <p className="text-sm text-gray-600 mt-1">{product.desc}</p>

                {/* Add to Cart */}
                <button
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
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
      <ToastContainer/>
    </div>
  );
}

export default AllProducts;
