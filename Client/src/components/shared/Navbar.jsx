import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BiLogoDeviantart } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { path: "/", pathName: "Home" },
    { path: "/about", pathName: "About" },
    { path: "/notice-board", pathName: "Notice Board" },
    { path: "/contact", pathName: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-800 font-bold text-2xl tracking-tight"
          >
            <span className="text-4xl text-blue-700">
              <BiLogoDeviantart />
            </span>
            <span>SMS</span>
          </Link>

          {/* Middle: Nav Items (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-gray-700 text-md font-medium">
            {navItem.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {item.pathName}
              </NavLink>
            ))}
          </ul>

          {/* Right: Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="flex items-center text-sm gap-2 px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-900 transition"
            >
              <MdDashboard className="text-lg" />
              Dashboard
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
               
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer text-gray-700"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
              {navItem.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    }`
                  }
                >
                  {item.pathName}
                </NavLink>
              ))}

              {/* Dashboard Button */}
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-900 transition"
              >
                <MdDashboard className="text-md" />
                Dashboard
              </Link>

              {/* Clerk Buttons */}
              <SignedOut>
                <SignInButton>
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: { avatarBox: "w-10 h-10" },
                  }}
                  afterSignOutUrl="/"
                />
              </SignedIn>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
