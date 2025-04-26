import React from 'react';
import Slider from 'react-slick';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from '../data/Products';

function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const products = Products.filter(product => product.featured);

  return (
    <div className="bg-[#fefdf7] py-16 px-4 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-10">Featured Products</h2>

      <div className="max-w-[1300px] mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                
                {/* Favorite Icon */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-green-100 transition">
                  <FaHeart className="text-green-600 text-lg" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-800 mb-1">{product.name}</h3>
                  <p className="text-green-600 font-medium mb-1">
                    {/* Display price with Ksh */}
                    Ksh {product.price.toLocaleString()} {product.priceUnit}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{product.desc}</p>

                  {/* Add to Cart */}
                  <button className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition">
                    <FaCartPlus /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedProducts;
