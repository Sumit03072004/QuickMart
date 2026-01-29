import React from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-\[1400px] mx-auto px-5 md:px-10 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <img
                  src={logo}
                  alt="QuickMart Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <a href="#" className="text-3xl font-bold">
                Quick<span className="text-green-500">Mart</span>
              </a>
            </div>

            <p className="text-zinc-400 mt-6 leading-relaxed max-w-sm">
              Bred for a high-quality shopping experience, QuickMart offers a
              wide range of fresh groceries delivered right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Products</li>
              <li className="hover:text-green-400 cursor-pointer">Categories</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-zinc-400 mb-5">
              Questions or feedback? <br /> We’d love to hear from you!
            </p>

            {/* Email Input */}
            <div className="flex items-center bg-zinc-900 rounded-full overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-5 py-3 text-sm text-white outline-none flex-1 placeholder:text-zinc-500"
              />
              <button className="bg-green-600 hover:bg-green-700 transition p-3 text-xl">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-12"></div>

        {/* Bottom */}
        <div className="text-center text-zinc-500 text-sm">
          © 2026 <span className="text-white font-semibold">QuickMart</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
