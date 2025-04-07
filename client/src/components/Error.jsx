import { useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation(); // Get the current URL

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-700 mt-4">
        The page <span className="font-bold">{location.pathname}</span> does not
        exist.
      </p>
    </div>
  );
};

export default Error;
