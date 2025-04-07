import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { AuthContext } from "../utils/AuthContext";
import { useSelector } from "react-redux";
import { UserDetailsContext } from "../utils/UserDetailsContext";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const { userName } = useContext(UserDetailsContext);

  const [showProfile, setShowProfile] = useState(false);
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

  const toggleUserProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          <div>
            <Link to="/">
              <img className="w-12" src={LOGO_URL} alt="Logo" />
            </Link>
          </div>

          <div> location</div>

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
            <Link
              to="/youtube"
              className="font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Youtube
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <div className="flex">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-2 mx-2 py-0 rounded hover:bg-red-600 text-white"
                >
                  Logout
                </button>

                <div className="relative">
                  {/* Profile Icon */}
                  <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
                    <img
                      onClick={toggleUserProfile}
                      src="https://i.pravatar.cc/150?img=3"
                      alt="User Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  </button>

                  {/* User Details Dropdown */}
                  {!showProfile ? null : (
                    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src="https://i.pravatar.cc/150?img=3"
                          alt="User Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">
                            {userName ? userName : "John Doe"}
                          </h3>
                          <p className="text-sm text-gray-500">
                            john.doe@example.com
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Role: Admin</p>
                        <p>Location: New York</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
