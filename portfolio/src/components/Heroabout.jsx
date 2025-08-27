import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const HeroAbout = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-18 items-center space-y-8 space-x-24">

        {/* Left: Hero */}
        <div className="flex flex-col items-center text-center  lg:text-left">
          <div className="w-48 h-48 mb-6">
            <img
              src='/assests/profile.jpg'
              alt="profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-md"
            />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-wide">
            Venkata Sai Ram Gunda
          </h2>
          <h4 className="text-gray-700">Data Analyst | Machine Learning Engineer</h4>
          <h4 className="text-gray-700">
            University of Texas at Arlington
          </h4>

          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="mailto:gundavsram@gmail.com"
              className="p-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              <HiOutlineMail /> {/* <i className="fa fa-envelope"></i> */}
           </a>
            <a
              href="https://www.linkedin.com/in/venkata-sai-ram-gunda-15400632a/"
              className="p-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedin /> {/* <i className="fa fa-linkedin"></i> */}
            </a>
            <a
              href="https://github.com/sairam2304"
              className="p-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              <FaGithub /> {/* <i className="fa fa-github"></i> */}
            </a>
          </div>
        </div>

        {/* Right: About */}
        <div className="flex lg:flex-col gap-8 lg:gap-3 lg:col-span-2">
  {/* Biography Card */}
  <div className="bg-white shadow-lg rounded-lg p-6 ">
    <h2 className="text-xl font-bold mb-4">Biography</h2>
    <p className="text-base md:text-lg leading-relaxed">
      I am a Data Analyst and Machine Learning Engineer with over 2 years of experience
      in building scalable data pipelines, developing machine learning models, and creating
      impactful dashboards. I specialize in Python, SQL, Power BI, and cloud environments,
      with a strong foundation in NLP, deep learning, and data engineering. My passion lies
      in transforming complex datasets into actionable insights to drive business decisions.
    </p>
  </div>

  {/* Education Card */}
  <div className="bg-white shadow-lg rounded-lg p-6 ">
    <h2 className="text-xl font-bold mb-4">Education</h2>
    <ul className="text-base  space-x-2">
      <li>• MS in Computer Science, 2024</li>
      <li>• B.Tech in Information Technology, 2022</li>
    </ul>
  </div>
</div>

        {/* <div className="lg:col-span-2">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h1 className="text-3xl font-bold font-weight-200 mb-4">Biography</h1>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            I am a Data Analyst and Machine Learning Engineer with over 2 years of experience 
            in building scalable data pipelines, developing machine learning models, and creating 
            impactful dashboards. I specialize in Python, SQL, Power BI, and cloud environments, 
            with a strong foundation in NLP, deep learning, and data engineering. My passion lies 
            in transforming complex datasets into actionable insights to drive business decisions.
          </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition mt-8">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <ul className="list-disc list-inside text-gray-700 mb-12 space-y-1">
                <li>MS in Computer Science, 2024</li>
                <li>B.Tech in Information Technology , 2022</li>
              </ul>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};


