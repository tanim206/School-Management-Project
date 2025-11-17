import React, { useState } from "react";
import DashbpardHeading from "../dashboardHeading/DashbpardHeading";
import { Pencil, Trash2, Search, Plus } from "lucide-react";
import { motion } from "framer-motion";

const NoticeAll = () => {
  const initialNotices = [
    { id: 1, name: "Admin", title: "Exam Schedule Published", date: "2025-01-12" },
    { id: 2, name: "Principal", title: "Holiday Notice", date: "2025-02-05" },
    { id: 3, name: "Teacher", title: "Parent Meeting Notice", date: "2025-02-22" },
    { id: 4, name: "Admin", title: "Result Day Notice", date: "2025-03-01" },
    { id: 5, name: "Chairman", title: "Important Announcement", date: "2025-03-10" },
    { id: 6, name: "Admin", title: "Class Routine Updated", date: "2025-03-18" },
    { id: 7, name: "Principal", title: "New Admission Open", date: "2025-04-05" },
    { id: 8, name: "Admin", title: "Sports Week Details", date: "2025-04-08" },
    { id: 9, name: "Vice Principal", title: "Seminar Notice", date: "2025-05-01" },
    { id: 10, name: "Admin", title: "Teacher Training", date: "2025-05-12" },
  ];

  const [notices, setNotices] = useState(initialNotices);
  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredNotices = notices.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchName = filterName === "all" || item.name === filterName;
    return matchSearch && matchName;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const paginated = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full p-5">
      <DashbpardHeading
        title="All Notice Dashboard"
        subtitle="School Management System all notice control....."
      />

      {/* Search - Filter - Add Button */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow w-full md:w-[350px]">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Notice..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="bg-white shadow px-4 py-2 rounded-xl"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Admin">Admin</option>
          <option value="Teacher">Teacher</option>
          <option value="Principal">Principal</option>
          <option value="Vice Principal">Vice Principal</option>
          <option value="Chairman">Chairman</option>
        </select>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          <Plus size={20} /> Add Notice
        </button>
      </div>

      {/* TABLE */}
      <div className="mt-8 w-full overflow-y-auto max-h-[600px] rounded-2xl shadow-xl border border-gray-200">
        <table className="w-full text-left bg-white text-lg">
          <thead className="bg-gray-200 sticky top-0 z-10 shadow">
            <tr className="text-gray-800">
              <th className="py-5 px-6 font-semibold text-base">No</th>
              <th className="py-5 px-6 font-semibold text-base">Name</th>
              <th className="py-5 px-6 font-semibold text-base">Title</th>
              <th className="py-5 px-6 font-semibold text-base">Date</th>
              <th className="py-5 px-6 font-semibold text-base text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="border-b border-gray-200 hover:bg-gray-50 transition-all text-gray-700"
              >
                <td className="py-5 px-6">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="py-5 px-6 font-medium">{item.name}</td>
                <td className="py-5 px-6">{item.title}</td>
                <td className="py-5 px-6">{item.date}</td>

                <td className="py-5 px-6 flex justify-center gap-4">
                  <button className="p-3 text-blue-600 hover:bg-blue-100 rounded-xl transition">
                    <Pencil size={22} />
                  </button>

                  <button className="p-3 text-red-600 hover:bg-red-100 rounded-xl transition">
                    <Trash2 size={22} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-3 items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NoticeAll;
