import React from "react";
import DashbpardHeading from "../dashboardHeading/DashbpardHeading";
import { Pencil, Trash2, Plus } from "lucide-react";

const NoticeAll = () => {


  return (
    <div className="w-full p-5">
      <DashbpardHeading
        title="All Notice Dashboard"
        subtitle="School Management System all notice control....."
      />
      <div className="mt-8 w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-left bg-white text-lg">
          <thead className="bg-gray-200">
            <tr className="text-gray-800">
              <th className="py-5 px-6 font-semibold text-base">No</th>
              <th className="py-5 px-6 font-semibold text-base">Name</th>
              <th className="py-5 px-6 font-semibold text-base">Title</th>
              <th className="py-5 px-6 font-semibold text-base">Date</th>
              <th className="py-5 px-6 font-semibold text-base text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-all text-gray-700">
              <td className="py-5 px-6">1</td>
              <td className="py-5 px-6 font-medium">name</td>
              <td className="py-5 px-6 font-medium">title</td>
              <td className="py-5 px-6 font-medium">10-12-2025</td>

              <td className="py-5 px-6 flex justify-center gap-4">
                <button className="p-3 text-blue-600 hover:bg-blue-100 rounded-xl transition">
                  <Pencil size={22} />
                </button>

                <button className="p-3 text-red-600 hover:bg-red-100 rounded-xl transition">
                  <Trash2 size={22} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeAll;
