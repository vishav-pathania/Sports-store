import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">Your Store Name</a>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button className="text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Search Form */}
        <form className="flex items-center space-x-2 flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-2 py-1 rounded-full border border-gray-600 focus:outline-none"
          />
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 focus:outline-none">
            Search
          </button>
        </form>

        {/* Login and Sign-Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
            Log In
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
            Sign Up
          </button>
        </div>

        {/* Cart Icon/Button */}
        <a href="/cart" className="relative">
          <span className="text-xl"><i className="fas fa-shopping-cart"></i></span>
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">3</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
