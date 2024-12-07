
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* <h1 className="text-white font-bold text-xl">Blog Space</h1> */}
              <h1 className="text-white font-bold text-xl">Blogify</h1>
            
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900'
                  : 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900'
                  : 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900'
                  : 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900'
                  : 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900'
                  : 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
