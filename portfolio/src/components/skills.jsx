import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaCloud } from "react-icons/fa";

export const Skills = () =>{
return (
<section id="skills" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

      {/* Row 1 - Languages */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      >
        <FaCode className="text-blue-600 text-5xl mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-3">Languages</h3>
        <p className="text-gray-700 text-lg">Python, Java, SQL, C++</p>
      </motion.div>

      {/* Row 1 - Frameworks */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      >
        <FaLayerGroup className="text-green-600 text-5xl mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-3">Frameworks & Libraries</h3>
        <p className="text-gray-700 text-lg">
          Flask, Spring Boot, React, Scikit-learn, TensorFlow, PyTorch
        </p>
      </motion.div>

      {/* Row 2 - Tools & Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:col-span-2 w-full md:w-1/2 mx-auto p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      >
        <FaCloud className="text-purple-600 text-5xl mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-3">Tools & Cloud</h3>
        <p className="text-gray-700 text-lg">
          Power BI, AWS, Git, Docker, APIs, MLOps
        </p>
      </motion.div>

    </div>
  </div>
</section>
);
}