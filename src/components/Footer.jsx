import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Food Order App. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
