import React from "react";
import Image from "next/image";
import salvador from "../../assets/salvador.png";
import hand_icon from "../../assets/hand-icon.png";
import right_arrow_white from "../../assets/right-arrow-white.png";
import download_icon from "../../assets/download-icon.png";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
      items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={salvador} alt="" className="rounded-full w-40" />
      </motion.div>
      <h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        Hi! I'm Salvador Americo Afo{" "}
        <Image src={hand_icon} alt="" className="w-6" />
      </h3>
      <h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        Computer Science & Information Technology Graduate Student
      </h1>
      <p
        className="max-w-2xl mx-auto font-Ovo"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        Salvador Americo Afo, final Year student of BCA-Computer Science &
        Information Technology at The Maharaja Sayajirao University of Baroda.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black 
              text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me <Image src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/Resume-Salvaddor.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex
              items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
