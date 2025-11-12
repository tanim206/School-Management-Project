import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaClipboardList } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50 border-b border-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Welcome to <span className="text-gray-900">School Management System</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl text-base md:text-lg mb-8"
        >
          Manage students, teachers, results, and attendance in one modern and
          easy-to-use platform. Simplify your school’s daily workflow today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            Powerful Features to Manage Your School
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MdOutlineSchool size={36} className="text-gray-800" />,
                title: "Smart Dashboard",
                desc: "Track all school data in a single clean dashboard.",
              },
              {
                icon: <FaUsers size={34} className="text-gray-800" />,
                title: "Manage Students",
                desc: "Easily add, update, and view student information.",
              },
              {
                icon: <FaChalkboardTeacher size={34} className="text-gray-800" />,
                title: "Teachers & Classes",
                desc: "Organize class schedules and teacher assignments.",
              },
              {
                icon: <FaClipboardList size={34} className="text-gray-800" />,
                title: "Results & Attendance",
                desc: "Simplify grade management and track attendance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-50 border-t border-gray-200 text-center py-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} School Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
