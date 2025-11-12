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
    { path: "/dashboard/notice-board", router: "Notice-board", icon: <FaBell /> },
    { path: "/dashboard/profile", router: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <div className="h-screen bg-white border-r border-gray-200 shadow-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-50 px-3 py-2 border-b border-gray-200">
        <Link
          to="/"
          className="font-semibold text-gray-800 text-[18px] tracking-wide"
        >
          School Management System
        </Link>
        <X
          onClick={() => setOpen(false)}
          className="md:hidden text-gray-600 hover:text-black rounded p-1 cursor-pointer transition"
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
                ? "flex items-center gap-2 mx-2 my-1 p-3 bg-gray-100 text-black rounded-md shadow-sm font-semibold"
                : "flex items-center gap-2 mx-2 my-1 p-3 text-gray-600 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200"
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
