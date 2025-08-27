import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
const experiences = [
{
role: "Data Analyst",
company: "Bonsai Solutions Inc",
period: "May 2025 - Present",
details: [
"Designed and deployed interactive Power BI dashboards tracking key KPIs, improving operational efficiency by 22%.",
"Optimized SQL queries reducing execution time by 40%.",
"Implemented data validation checks, reducing inconsistencies by 25%."
]
},
{
role: "Data Analyst",
company: "Kshitija Professional Services LLC",
period: "Aug 2024 - Apr 2025",
details: [
"Conducted deep-dive analyses, improving forecasting accuracy by 20%.",
"Revamped ETL pipelines reducing latency by 40%.",
"Automated data cleaning using Python and SQL."
]
},
{
role: "Graduate Research Assistant",
company: "University of Texas at Arlington",
period: "Jan 2023 - May 2024",
details: [
"Developed CNN-based models for early disease diagnosis, achieving 92% accuracy.",
"Researched applications of GPT and BERT for clinical text analysis.",
"Optimized ETL pipelines with GPU acceleration, reducing processing time by 40%."
]
},
{
role: "Machine Learning Engineer",
company: "SpringML",
period: "Sep 2021 - Jun 2022",
details: [
"Developed scalable ML models improving decision-making across product lines.",
"Built NLP pipelines for text classification and entity extraction, boosting accuracy by 35%.",
"Implemented MLOps pipelines with MLflow for efficient deployment."
]
}
];


return (
<section id="experience" className="py-24 px-6 bg-gray-50">
<h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Experience</h2>
<div className="max-w-5xl mx-auto space-y-8">
{experiences.map((exp, index) => (
<motion.div
key={index}
className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
<div className="flex justify-between">
<h3 className="text-2xl font-semibold text-gray-800">{exp.role} - <span className="text-gray-600">{exp.company}</span></h3>
<p className="text-gray-500 mb-4">{exp.period}</p>
</div>
<ul className="list-disc list-inside text-gray-600 space-y-2">
{exp.details.map((d, i) => (
<li key={i}>{d}</li>
))}
</ul>
</motion.div>
))}
</div>
</section>
);
};