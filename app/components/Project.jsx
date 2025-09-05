import Image from 'next/image';
import React from 'react'
import send_icon from "../../assets/send-icon.png"
import right_arrow_bold from "../../assets/right-arrow.png"



const Project = () => {
    const workData = [
        {
            title: 'Frontend project',
            description: 'Web Design',
            bgImage: '/work-1.png',
        },
        {
            title: 'E-commerce Project',
            description: 'Website',
            bgImage: '/work-2.png',
        },
        {
            title: 'Marketing Website',
            description: 'Web Design',
            bgImage: '/work-3.png',
        },
        {
            title: 'UI/UX designing',
            description: 'UI/UX Design',
            bgImage: '/work-4.png',
        },
    ]

  return (
      <div id="project" className="w-full px-[12%] py-10 scroll-mt-20"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      data-aos-delay="500"
      >
          <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
              Welcome to my web Development portfolio!
              Explore a collection of projects showcasing my expertise in front-end development.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 ">
    {workData.map((project, index) => (
        <div
            key={index}
            className="w-full h-60 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
        >
            <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                      py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
                <div>
                    <h2 className="font-semibold text-gray-700 dark:text-black">{project.title}</h2>
                    <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9
                aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                    <Image src={send_icon} alt="send icon" className="w-5" />
                </div>
            </div>
        </div>
    ))}
</div>
          <a href="" className='w-max flex items-center justify-center gap-2
          text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
          my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show more <Image src={right_arrow_bold} alt="Right arrow" className="w-4" />
    </a>

    </div>
  )
}

export default Project