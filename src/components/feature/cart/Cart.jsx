import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  console.log("cartItems in cart", cartItems);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price / 100) * item.quantity;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Cart Header */}
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
            >
              {/* Item Info */}
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  ₹ {item?.price ? item?.price / 100 : item?.defaultPrice / 100}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4 border px-4 py-2 rounded-lg shadow">
                <button
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                  className="px-3 py-1 bg-red-400 text-white rounded-md text-lg font-bold hover:bg-red-600"
                >
                  -
                </button>
                <span className="text-md font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addItemToCart(item))}
                  className="px-3 py-1 bg-green-500 text-white rounded-md text-lg font-bold hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Checkout Section */}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          {/* Show Total */}
          <h3 className="text-lg font-semibold">
            Total - ₹{totalAmount.toFixed(2)}
          </h3>

          {/* Checkout Button */}
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-orange-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
