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
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-gradient-to-l from-black via-neutral-900 to-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight"
          >
            <span className="text-4xl text-white/70">
              <BiLogoDeviantart />
            </span>
            <span>SchoolMS</span>
          </Link>

          {/* Middle: Nav Items (Desktop) */}
          <ul className="hidden md:flex space-x-4 text-sm font-medium">
            {navItem.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
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
              className="flex items-center text-sm gap-2 px-4 py-1.5 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition"
            >
              <MdDashboard className="text-lg" />
              Dashboard
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="text-2xl text-white cursor-pointer duration-300 transition hover:opacity-80">
                  <FaRegCircleUser />
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{ elements: { avatarBox: 'w-9 h-9' } }}
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
            className="md:hidden border-t border-white/20 bg-black"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-white font-medium">
              {navItem.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-all duration-200 px-3 py-1.5 rounded-md ${
                      isActive
                        ? "bg-white text-black shadow-md"
                        : "hover:bg-white/10"
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
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                <MdDashboard className="text-md" />
                Dashboard
              </Link>

              {/* Clerk Buttons */}
              <SignedOut>
                <SignInButton>
                  <button className="px-6 py-2 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition">
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
