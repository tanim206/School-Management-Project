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

const Sidebar = () => {
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
    <div>
      <Link to="/" className="bg-orange-400 flex  justify-center font-semibold text-white py-2 text-center text-[18px] ">School Management System</Link>
      <ul>
        {routes.map((item, index) => (
          <NavLink end to={item.path} key={index} className={({isActive})=>isActive ? "flex items-center bg-sky-600 text-white shadow  p-3 gap-1" : "flex items-center p-1 gap-1 m-2"}>
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span>{item.router}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
