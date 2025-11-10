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

const MAIN_COLOR = "#ff2f00";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { path: "/", pathName: "Home" },
    { path: "/about", pathName: "About" },
    { path: "/notice-board", pathName: "Notice Board" },
    { path: "/contact", pathName: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full shadow-md z-50 border-b border-red-700/40"
      style={{ backgroundColor: MAIN_COLOR }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
            <span className="text-4xl text-white">
              <BiLogoDeviantart />
            </span>
            <span>SMS</span>
          </Link>

          {/* Middle: Nav Items (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {navItem.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "text-white border-b-2 border-white pb-1" : "text-white/90 hover:text-white"
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
              className="flex items-center text-sm gap-2 px-4 py-1.5 bg-white text-[#ff2f00] font-medium rounded-md hover:bg-gray-100 transition"
            >
              <MdDashboard className="text-lg" />
              Dashboard
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="text-2xl text-white cursor-pointer duration-300 transition hover:opacity-90">
                  <FaRegCircleUser />
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: { avatarBox: "w-9 h-9" },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/20 bg-[#ff2f00]"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-white font-medium">
              {navItem.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive ? "border-b-2 border-white pb-1" : "hover:text-white/90"
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
                className="flex items-center gap-2 bg-white text-[#ff2f00] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                <MdDashboard className="text-md" />
                Dashboard
              </Link>

              {/* Clerk Buttons */}
              <SignedOut>
                <SignInButton>
                  <button className="px-6 py-2 border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#ff2f00] transition">
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
