import Image from 'next/image';
import React from 'react';
import user_image from '../../assets/sal.jpg';
import codeIcon from '../../assets/code-icon.png';
import iconDark from '../../assets/code-icon.png';
import eduIcon from '../../assets/icons8-education-50.png';
import project_icon from '../../assets/icons8-project-50.png';
import vscode from '../../assets/vscode.png';
import figma from '../../assets/figma.png';
import git from '../../assets/git.png';
import mongodb from '../../assets/mongodb.png';
import dark_code from '../../assets/code-icon-dark.png';
import edu_white from '../../assets/edu-white.png';
import project_white from '../../assets/project-white.png';
import react from '../../assets/icons8-react-80.png';
import javascript from '../../assets/icons8-javascript-80.png';
import html from '../../assets/icons8-html-80.png';
import php from '../../assets/icons8-php-80.png';
import python from '../../assets/icons8-python-80.png';

const About = ({ isDarkMode }) => {
  const infoList = [
    { icon: codeIcon, iconDark: dark_code, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: eduIcon, iconDark: edu_white, title: 'Education', description: 'BCA in Computer Science & Information Technology' },
    { icon: project_icon, iconDark: project_white, title: 'Projects', description: 'Built more than 5 projects' },
  ];

  const toolsData = [
    { tool: vscode },
    { tool: figma },
    { tool: mongodb },
    { tool: git },
    { tool: react },
    { tool: javascript },
    { tool: html },
    { tool: php },
    { tool: python },
  ];

  return (
      <div id="about" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10">
        {/* Image Section */}
        <div className="w-40 sm:w-64 lg:w-80 rounded-3xl">
          <Image src={user_image} alt="user" className="w-full rounded-3xl" />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-center lg:text-left font-Ovo">
            I am a passionate and dedicated student pursuing a Bachelor’s degree in Computer Science and Information Technology (BCA). My primary focus is on full-stack development, with a strong interest in building innovative and user-friendly web applications.
            Currently, I am honing my skills in front-end development, working with modern frameworks and tools to create visually appealing and responsive interfaces. I am eager to expand my expertise and grow into a versatile full-stack developer, committed to delivering impactful digital solutions.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                          hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 text-center lg:text-left text-gray-700 font-Ovo dark:text-white/80">Tools & Technologies</h4>
          <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5">
            {toolsData.map(({ tool }, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                          rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
