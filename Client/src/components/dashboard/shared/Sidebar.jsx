import { X } from "lucide-react";
import React from "react";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaClipboardList,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Sidebar = ({ setOpen }) => {
  const routes = [
    { path: "/dashboard", router: "Home", icon: <FaHome /> },
    { path: "/dashboard/users", router: "Users", icon: <FaUsers /> },
    { path: "/dashboard/setting", router: "Setting", icon: <FaCog /> },
    { path: "/dashboard/result", router: "Result", icon: <FaClipboardList /> },
    {
      path: "/dashboard/notice-board",
      router: "Notice-board",
      icon: <FaBell />,
    },
    { path: "/dashboard/profile", router: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-black via-neutral-900 to-zinc-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-zinc-800 px-3 py-2 shadow-md">
        <Link
          to="/"
          className="font-semibold text-white text-[18px] tracking-wide"
        >
          School Management System
        </Link>
        <X
          onClick={() => setOpen(false)}
          className="md:hidden text-white bg-zinc-700 hover:bg-zinc-600 rounded p-1 cursor-pointer transition"
        />
      </div>

      {/* Routes */}
      <ul className="mt-2">
        {routes.map((item, index) => (
          <NavLink
            end
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 mx-2 my-1 p-3 bg-white text-black rounded-md shadow-md font-semibold"
                : "flex items-center gap-2 mx-2 my-1 p-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-md transition-all duration-200"
            }
          >
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span>{item.router}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
