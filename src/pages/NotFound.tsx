import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-8xl font-bold text-gray-200">404</h1>
      <p className="text-xl text-gray-500 mt-4">Page not found</p>
      <Link to="/" className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-brand-light transition-colors">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
