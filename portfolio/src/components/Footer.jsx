import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
return (
<footer className="bg-gray-900 text-white py-6 text-center mt-10">
<p>© {new Date().getFullYear()} Venkata Sai Ram Gunda. All rights reserved.</p>
<div className="flex justify-center space-x-6 mt-4">
<a href="#about" className="hover:text-blue-400">About</a>
<a href="#experience" className="hover:text-blue-400">Experience</a>
<a href="#projects" className="hover:text-blue-400">Projects</a>
<a href="#skills" className="hover:text-blue-400">Skills</a>
</div>
</footer>
);
};