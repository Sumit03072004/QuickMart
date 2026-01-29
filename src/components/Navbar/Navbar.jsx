import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center bg-black text-white px-6 py-4 fixed top-0 right-0 left-0 z-50">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl">
            <img src={logo} alt="QuickMart Logo" className="w-10 h-10" />
          </div>
          <Link to="/" className="text-3xl font-bold">
            Quick<span className="text-green-500">Mart</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#" className="hover:text-green-400 font-bold">Home</a></li>
          <li><a href="#" className="hover:text-green-400 font-bold">About us</a></li>
          <li><a href="#" className="hover:text-green-400 font-bold">Process</a></li>
          <li><a href="#" className="hover:text-green-400 font-bold">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">

          {/* Search Input (Desktop only) */}
          <div className="hidden md:flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 text-black outline-none w-40"
            />
            <button className="px-3 py-2 text-green-600">
              <FaSearch />
            </button>
          </div>

          {/* Wishlist */}
          <a href="#" className="hover:text-green-400 text-xl">
            <FaHeart />
          </a>

          {/* Cart */}
          <a href="#" className="hover:text-green-400 text-xl">
            <FaShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-green-500 text-3xl md:hidden"
          >
            <TiThMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-20 right-6 bg-black p-4 rounded-lg flex flex-col gap-4 md:hidden">
            <li><a href="#" className="hover:text-green-400 font-bold">Home</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">About us</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">Process</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">Contact</a></li>
          </ul>
        )}

      </nav>
    </header>
  )
}

export default Navbar
