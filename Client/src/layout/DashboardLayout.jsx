import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/shared/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";
const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-red-200">
      {/* dekstop screen */}
      <div className="min-h-screen hidden md:block w-[20%]">
        <Sidebar setOpen={setOpen} />
      </div>
      {/* mobile screen */}
      <div
        className={`md:hidden fixed transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Sidebar setOpen={setOpen} />
      </div>
      <div className="flex p-4 gap-2 flex-col">
        <div className="md:hidden">
          <Menu onClick={() => setOpen(!open)} />
        </div>
        <div className=" w-full bg-red-400 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
