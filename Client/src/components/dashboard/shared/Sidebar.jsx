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
    <div className="h-screen bg-gradient-to-b from-green-800 via-green-700 to-green-900">
      {/* Header */}
      <div className="flex justify-between gap-2.5 items-center bg-green-600 px-2">
        <Link
          to="/"
          className="font-semibold text-white py-2 text-center text-[18px]"
        >
          School Management System
        </Link>
        <X
          onClick={() => setOpen(false)}
          className="md:hidden text-white bg-green-800 rounded p-1 cursor-pointer"
        />
      </div>

      {/* Routes */}
      <ul>
        {routes.map((item, index) => (
          <NavLink
            end
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "flex items-center bg-green-500 text-white shadow-md p-3 gap-2 rounded-md mx-2 my-1"
                : "flex items-center p-3 gap-2 mx-2 my-1 text-white/90 hover:bg-green-600/40 rounded-md transition-all duration-200"
            }
          >
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span className="font-medium">{item.router}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
