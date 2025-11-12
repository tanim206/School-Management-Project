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
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { path: "/", pathName: "Home" },
    { path: "/about", pathName: "About" },
    { path: "/notice-board", pathName: "Notice Board" },
    { path: "/contact", pathName: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-800 font-semibold text-xl tracking-tight"
          >
            <span className="text-4xl text-gray-400">
              <BiLogoDeviantart />
            </span>
            <span>SchoolMS</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 text-sm font-medium">
            {navItem.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`
                }
              >
                {item.pathName}
              </NavLink>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="flex items-center text-sm gap-2 px-4 py-1.5 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition"
            >
              <MdDashboard className="text-lg" />
              Dashboard
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="text-2xl text-gray-600 cursor-pointer hover:text-black transition">
                  <FaRegCircleUser />
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white shadow-sm"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
              {navItem.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-all duration-200 px-3 py-1.5 rounded-md ${
                      isActive
                        ? "bg-gray-100 text-black font-semibold"
                        : "hover:bg-gray-50"
                    }`
                  }
                >
                  {item.pathName}
                </NavLink>
              ))}

              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
              >
                <MdDashboard className="text-md" />
                Dashboard
              </Link>

              <SignedOut>
                <SignInButton>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{ elements: { avatarBox: "w-10 h-10" } }}
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
