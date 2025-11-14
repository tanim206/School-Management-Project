import { X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
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
  const [openDropdown, setOpenDropdown] = useState(null);

  const routes = [
    {
      router: "Home",
      icon: <FaHome />,
      children: [
        { path: "/dashboard", router: "Dashboard Home" },
        { path: "/dashboard/overview", router: "Overview" },
      ],
    },

    {
      router: "Users",
      icon: <FaUsers />,
      children: [
        { path: "/dashboard/users/all", router: "All Users" },
        { path: "/dashboard/users/teacher", router: "Teachers" },
        { path: "/dashboard/users/student", router: "Students" },
      ],
    },

    {
      router: "Setting",
      icon: <FaCog />,
      children: [
        { path: "/dashboard/setting/general", router: "General Setting" },
        { path: "/dashboard/setting/security", router: "Security" },
      ],
    },

    {
      router: "Result",
      icon: <FaClipboardList />,
      children: [
        { path: "/dashboard/result/mid", router: "Mid Result" },
        { path: "/dashboard/result/final", router: "Final Result" },
      ],
    },

    {
      router: "Notice Board",
      icon: <FaBell />,
      children: [
        { path: "/dashboard/notice/all", router: "All Notice" },
        { path: "/dashboard/notice/add", router: "Add Notice" },
      ],
    },

    {
      router: "Profile",
      icon: <FaUserCircle />,
      children: [
        { path: "/dashboard/profile/view", router: "View Profile" },
        { path: "/dashboard/profile/edit", router: "Edit Profile" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 shadow-sm text-gray-800">

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
          <div key={index} className="mx-2 my-1">

            {/* Button */}
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between p-3 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-[18px]">{item.icon}</span>
                <span className="font-medium">{item.router}</span>
              </div>

              <ChevronDown
                className={`transition-all duration-300 ${
                  openDropdown === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === index ? "max-h-60" : "max-h-0"
              }`}
            >
              <ul className="ml-9 mt-1 border-l border-gray-200">
                {item.children.map((child, i) => (
                  <NavLink
                    to={child.path}
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 text-black bg-gray-100 font-medium rounded-md"
                        : "block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md transition"
                    }
                  >
                    {child.router}
                  </NavLink>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
