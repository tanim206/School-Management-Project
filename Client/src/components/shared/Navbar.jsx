import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { path: "/", pathName: "Home" },
    { path: "/about", pathName: "About" },
    { path: "/notice-board", pathName: "Notice Board" },
    { path: "/contact", pathName: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <h1 className="text-2xl font-bold text-gray-800">
            SM <span className="text-blue-600">S</span>
          </h1>

          {/* Middle: Nav Items */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navItem?.map((item) => (
              <NavLink to={item.path}>{item.pathName}</NavLink>
            ))}
          </ul>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="px-4 py-2 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition">
              Sign In
            </button> */}
            <button className="px-4 py-2 bg-blue-600 text-white font-medium cursor-pointer rounded-md hover:bg-blue-700 transition">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {/* simple 3-line hamburger */}
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 py-4 shadow-md" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
          {navItem?.map((item) => (
            <NavLink to={item.path}>{item.pathName}</NavLink>
          ))}
        </ul>

        <div className="mt-4 flex flex-col items-center space-y-3">
          {/* <button className="px-4 py-2 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition">
            Sign In
          </button> */}
          <button className="px-4 py-2 bg-blue-600 text-white font-medium cursor-pointer rounded-md hover:bg-blue-700 transition">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
