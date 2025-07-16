import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
