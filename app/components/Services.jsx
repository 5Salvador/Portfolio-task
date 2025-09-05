import React from 'react';
import Image from 'next/image';
import web_icon from "../../assets/icons8-web-design-50.png";
import ui_icon from "../../assets/icons8-ui-ux-design-50.png";
import web_dev from "../../assets/icons8-web-development-50.png";
import right_arrow from "../../assets/right-arrow.png";

const Services = () => {
    const serviceData = [
        { icon: web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '#' },
        { icon: ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '#' },
        { icon: web_dev, title: 'Web Development', description: 'Creative design solutions to enhance visual communication...', link: '#' },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a passionate and dedicated student pursuing a Bachelor’s degree in Computer Science and Information Technology (BCA).
                My primary focus is on full-stack development, with a strong interest in building innovative and user-friendly web applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div
                        key={index}
                        className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500 hover:shadow-lg dark:hover:bg-darKHover dark:hover:shadow-white dark:hover:text-black"
                    >
                        <Image src={icon} alt={title} className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white dark:hover:text-black">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80 dark:hover:text-black">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5 text-blue-500 hover:underline">
                            Read more <Image src={right_arrow} alt="" className="w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
