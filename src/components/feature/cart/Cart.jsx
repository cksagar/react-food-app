import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log("cartItems in cart", cartItems);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Cart Header */}
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
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
                //   logic for removing items from cart
                className="px-3 py-1 bg-gray-200 text-black rounded-md text-lg font-bold"
              >
                -
              </button>
              <span className="text-md font-semibold">{item.quantity}</span>
              <button
                //   logic for adding more items
                className="px-3 py-1 bg-green-500 text-white rounded-md text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-right">
        {/* show total of cart */}
        <h3 className="text-lg font-semibold">Total - </h3>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-orange-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
