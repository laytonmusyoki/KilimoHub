import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from '../data/Products';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-[95%] mx-auto p-6 text-center text-gray-600">
        <p className="mt-10 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fefdf7] min-h-screen py-10 px-4">
      <div className="max-w-[95%] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-green-700 hover:underline font-medium"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl shadow group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-between h-full gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-green-900 mb-2">{product.name}</h1>
              <p className="text-lg sm:text-xl text-green-700 font-semibold mb-1">
                Ksh {product.price.toLocaleString()} / {product.priceUnit}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{product.desc}</p>
            </div>

            <button className="mt-6 bg-green-700 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full shadow hover:bg-green-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
