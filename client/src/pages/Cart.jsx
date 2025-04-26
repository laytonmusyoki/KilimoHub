import React from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(state => state.cart.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalPrice = cartItems.length > 0
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="bg-[#f7f9fc] py-16 px-4 min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 mb-10 text-center">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
        ) : (
          <div>
            {/* Cart Items */}
            <div className="space-y-8">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="font-semibold text-green-900 text-xl">{item.name}</h3>
                      <p className="text-green-600 text-sm mt-1">Ksh {item.price.toLocaleString()} / {item.priceUnit}</p>

                      <div className="flex items-center mt-3">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-l-lg"
                        >
                          <FaMinus />
                        </button>

                        <span className="bg-gray-100 text-gray-800 font-medium px-6 py-2">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleIncrease(item)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-r-lg"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-12 flex flex-col items-center">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Total: <span className="text-green-700">Ksh {totalPrice.toLocaleString()}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="bg-green-700 hover:bg-green-800 text-white py-4 px-12 rounded-full text-lg font-bold shadow-md hover:shadow-lg transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
