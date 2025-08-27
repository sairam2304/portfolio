import React from "react";
import { motion } from "framer-motion";


// Navbar Component
export const  Navbar = () => {
return (
     <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-black  top-0 w-full z-50">
<h1 className="text-2xl font-extrabold text-blue-600">Venkata Sai Ram Gunda</h1>
<ul className="flex justify-content space-x-10 font-medium">
<li><a href="#about" className="text-white hover:text-blue-600 transition">About</a></li>
<li><a href="#experience" className="text-white hover:text-blue-600 transition">Experience</a></li>
<li><a href="#projects" className="text-white hover:text-blue-600 transition">Projects</a></li>
<li><a href="#skills" className="text-white hover:text-blue-600 transition">Skills</a></li>
{/* <li><a href="#contact" className="text-white hover:text-blue-600 transition">Contact</a></li> */}
</ul>
</nav> 
);
};
{/* <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-black  top-0 w-full z-50">
<h1 className="text-2xl font-extrabold text-blue-600">Venkata Sai Ram Gunda</h1>
<ul className="flex justify-content space-x-10 font-medium">
<li><a href="#about" className="text-white hover:text-blue-600 transition">About</a></li>
<li><a href="#experience" className="text-white hover:text-blue-600 transition">Experience</a></li>
<li><a href="#projects" className="text-white hover:text-blue-600 transition">Projects</a></li>
<li><a href="#skills" className="text-white hover:text-blue-600 transition">Skills</a></li>
<li><a href="#contact" className="text-white hover:text-blue-600 transition">Contact</a></li>
</ul>
</nav> */}