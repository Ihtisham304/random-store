import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Welcome to Our Store
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link to="/items">
            <a className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Browse Items
            </a>
          </Link>
          <Link to="/checkout">
            <a className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              View Checkout
            </a>
          </Link>
          <Link to="/add-item">
            <a className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Add New Item
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
