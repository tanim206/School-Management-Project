import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/shared/Sidebar";
const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="min-h-screen bg-gray-50 w-[20%]">
        <Sidebar />
      </div>
      <div className=" w-[80%] bg-amber-100 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
