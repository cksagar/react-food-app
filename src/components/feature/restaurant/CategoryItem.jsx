import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../store/cartSlice";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const additemsToCart = () => {
    dispatch(addItemToCart(item.card.info)); //  Dispatch action
  };

  const removeItemsFromCart = () => {
    dispatch(removeItemFromCart(item.card.info.id)); //  Dispatch action
  };

  // Find the current item's quantity in the cart
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === item.card.info.id
  );
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex justify-between items-center w-full p-2 border-b-2">
      {/* Left Section (Text Content) */}
      <div className="w-9/12">
        <p className="text-lg font-semibold">{item.card.info.name}</p>
        <p className="text-sm text-gray-600">
          Price: ₹{item.card.info.price / 100}
        </p>
      </div>

      {/* Right Section (Cart Controls) */}
      <div className="w-3/12 flex items-center justify-center bg-white border border-gray-300 rounded-lg px-2 py-1 shadow-md">
        <button
          onClick={removeItemsFromCart}
          className="cursor-pointer px-3 py-1 bg-red-400 text-white rounded-md text-lg font-bold hover:bg-red-600"
        >
          -
        </button>

        <span className="text-md font-semibold text-gray-700 w-10 text-center">
          {itemQuantity > 0 ? itemQuantity : "Add"}
        </span>

        <button
          className="cursor-pointer px-3 py-1 bg-green-400 text-white rounded-md text-lg font-bold hover:bg-green-600"
          onClick={additemsToCart}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
