import React from 'react';
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from '../features/cart/favoriteSlice';  
import { addToCart } from '../features/cart/cartSlice'; // ✅ import addToCart!
import { ToastContainer,toast } from 'react-toastify';

function Favorites() {
  const favoriteItems = useSelector(state => state.favorite.items || []);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorite(productId));
    toast.success('Item removed');
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`One ${item.name} added to cart!`);
  };

  return (
    <div className="bg-white py-16 px-4 min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 text-center">💚 Your Favorites</h2>

        {favoriteItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">You have no favorite products.</p>
        ) : (
          <div className="space-y-8">
            {favoriteItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-5 bg-[#fefdf7] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="font-semibold text-green-900 text-xl">{item.name}</h3>
                    <p className="text-green-600 text-sm mt-1">Ksh {item.price.toLocaleString()} / {item.priceUnit}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                    title="Add to Cart"
                  >
                    <FaCartPlus size={18} />
                  </button>

                  {/* Remove from Favorites */}
                  <button
                    onClick={() => handleRemoveFromFavorites(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
                    title="Remove from Favorites"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Favorites;
