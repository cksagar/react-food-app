import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { AuthContext } from "../utils/AuthContext";
import { ThemeContext } from "../utils/ThemeContext"; // Ensure correct import
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // subscribing cart slice to get data
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log("cart items ", totalItems);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link to="/">
              <img className="w-12" src={LOGO_URL} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/home"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Cart - ({totalItems}) items
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white"
              >
                Logout
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 dark:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
