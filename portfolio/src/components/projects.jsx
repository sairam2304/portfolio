import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
const projects = [
{
title: "Conversational AI Chatbot",
tech: "OpenAI, LangChain, Streamlit",
desc: "Built a context-aware chatbot with memory and real-time response streaming.",
link: "#"
},
{
title: "GANs for Image Synthesis",
tech: "PyTorch, TensorFlow",
desc: "Implemented GANs to generate realistic synthetic images with improved fidelity.",
link: "#"
},
{
title: "Collaborative Task Management System",
tech: "React, Spring Boot, PostgreSQL",
desc: "Developed a real-time task management platform with RESTful APIs and WebSockets.",
link: "#"
},
{
title: "Customer Insights Analysis",
tech: "Python, Power BI, KNN",
desc: "Built clustering models and dashboards to improve customer classification and marketing ROI.",
link: "#"
},
{
title: "Hand Emoji Recognition",
tech: "Computer Vision, MediaPipe",
desc: "Developed CV models to detect and classify emojis from hand gestures with 90% accuracy.",
link: "#"
}
];


return (
<section id="projects" className="py-20 px-6 bg-white">
<h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
{projects.map((proj, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
>
<h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
<p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
<p className="mb-4">{proj.desc}</p>
{/* <a href={proj.link} className="text-blue-600 hover:underline">View Project</a> */}

</motion.div>
))}
</div>
</section>
);
}; 