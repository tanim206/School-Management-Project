import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-6 md:p-14">
      {/* HERO */}
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        >
          About Our School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4"
        >
          Building future leaders with excellence, innovation, and strong moral values.
        </motion.p>
      </section>

      {/* MISSION + VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To provide an environment where students achieve academic excellence,
            develop critical thinking, and grow with discipline and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition"
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Creating confident, responsible, and globally aware citizens who are ready to
            contribute positively to society.
          </p>
        </motion.div>
      </div>

      {/* FEATURES */}
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Experienced Teachers", "Smart Classrooms", "Student Counseling", "Modern Library", "Sports Facilities", "Digital Learning"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HISTORY */}
      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Our History
        </motion.h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-center text-lg leading-relaxed">
          Since 2005, our institution has grown into one of the most trusted and
          high-performing schools in the region. Our commitment to excellence has
          shaped thousands of students over the years.
        </p>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["Principal", "Vice Principal", "Academic Coordinator"].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition"
            >
              <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-semibold">{role}</h3>
              <p className="text-gray-600 mt-2 text-sm">Dedicated to shaping the future with excellence.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Want to Know More?</h2>
        <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
          Contact us anytime for admission information or campus tours.
        </p>
        <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl text-xl hover:bg-gray-700 transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
