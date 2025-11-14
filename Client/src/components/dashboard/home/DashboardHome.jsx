import React from "react";
import {
  Bar,
  Line,
  Doughnut
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const DashboardHome = () => {
  // BAR CHART
  const studentBarData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Students",
        data: [45, 60, 55, 70, 80, 95],
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#4f46e5");
          gradient.addColorStop(1, "#6366f1");
          return gradient;
        },
        borderRadius: 10,
        shadowOffsetX: 3,
        shadowOffsetY: 4,
        shadowBlur: 10,
        shadowColor: "rgba(0,0,0,0.3)",
      },
    ],
  };

  // LINE CHART
  const resultLineData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "School Result %",
        data: [78, 82, 85, 88, 90],
        borderColor: "#10b981",
        borderWidth: 4,
        tension: 0.45,
        pointRadius: 6,
        pointBackgroundColor: "#34d399",
        pointShadowColor: "rgba(0,0,0,0.4)",
        pointShadowBlur: 12,
      },
    ],
  };

  // DOUGHNUT CHART
  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [720, 520],
        backgroundColor: [
          "rgba(99,102,241,0.9)",
          "rgba(244,63,94,0.9)",
        ],
        hoverOffset: 20,
        borderWidth: 3,
        borderColor: "#ffffff",
      },
    ],
  };

  return (
    <div className="w-full p-4 space-y-6">

      <h1 className="text-3xl font-bold text-gray-900 tracking-tight drop-shadow-lg">
        Dashboard Overview (3D Edition)
      </h1>
      <p className="text-gray-500 -mt-3">Welcome back! Here's what’s happening today.</p>

      {/* Stats Cards */}  
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* CARD */}
        <div className="p-6 bg-white shadow-2xl rounded-xl border hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-gray-500 text-sm">Total Students</h3>
          <p className="text-3xl font-bold text-indigo-600 drop-shadow-md">1,240</p>
          <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
        </div>

        <div className="p-6 bg-white shadow-2xl rounded-xl border hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-gray-500 text-sm">Total Teachers</h3>
          <p className="text-3xl font-bold text-emerald-600 drop-shadow-md">68</p>
          <p className="text-sm text-green-600 mt-1">↑ 5% increased</p>
        </div>

        <div className="p-6 bg-white shadow-2xl rounded-xl border hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-gray-500 text-sm">Monthly Income</h3>
          <p className="text-3xl font-bold text-orange-600 drop-shadow-md">$24,500</p>
          <p className="text-sm text-blue-600 mt-1">↑ Stable Growth</p>
        </div>

        <div className="p-6 bg-white shadow-2xl rounded-xl border hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-gray-500 text-sm">Present Today</h3>
          <p className="text-3xl font-bold text-pink-600 drop-shadow-md">1,120</p>
          <p className="text-sm text-blue-600 mt-1">Attendance Improved</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* BAR CHART */}
        <div className="bg-white p-5 rounded-xl border shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl transition">
          <h2 className="text-lg font-semibold mb-3">New Students Overview (3D)</h2>
          <Bar data={studentBarData} />
        </div>

        {/* LINE CHART */}
        <div className="bg-white p-5 rounded-xl border shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl transition">
          <h2 className="text-lg font-semibold mb-3">School Result Progress (3D)</h2>
          <Line data={resultLineData} />
        </div>

        {/* DOUGHNUT CHART */}
        <div className="bg-white p-5 rounded-xl border shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl transition">
          <h2 className="text-lg font-semibold mb-3">Male vs Female (3D)</h2>
          <Doughnut data={genderData} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white p-5 rounded-xl border shadow-xl backdrop-blur-md bg-opacity-80">
          <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">🎉 25 New Students Registered Today</li>
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">📢 New Notice Published for Class 10 Exam</li>
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">👨‍🏫 Teacher Meeting Scheduled at 3:00 PM</li>
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">📝 Result Sheet Updated for Class 8</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl border shadow-xl backdrop-blur-md bg-opacity-80">
          <h2 className="text-lg font-semibold mb-3">Notice Board</h2>
          <ul className="space-y-3">
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">📌 School Will Be Closed on Friday</li>
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">📌 Science Fair Event on Monday</li>
            <li className="p-3 rounded-lg bg-gray-50 border shadow-sm">📌 Exam Admit Card Available</li>
          </ul>
        </div>
      </div>

      {/* Student Table 3D */}
      <div className="bg-white p-5 rounded-xl border shadow-2xl">
        <h2 className="text-lg font-semibold mb-4">Top Students (3D Table)</h2>

        <table className="w-full border text-left rounded-lg overflow-hidden shadow-xl">
          <thead className="bg-gray-100 shadow-inner">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Roll</th>
              <th className="p-3">GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Sakib Hasan</td>
              <td className="p-3">10</td>
              <td className="p-3">12</td>
              <td className="p-3 font-bold text-green-600 drop-shadow-md">5.00</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Jannat Akter</td>
              <td className="p-3">10</td>
              <td className="p-3">18</td>
              <td className="p-3 font-bold text-green-600 drop-shadow-md">5.00</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">Imran Hossain</td>
              <td className="p-3">9</td>
              <td className="p-3">5</td>
              <td className="p-3 font-bold text-green-600 drop-shadow-md">4.90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
