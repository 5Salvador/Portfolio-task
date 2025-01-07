import React from 'react'
import Image from 'next/image';
import email_icon from "../../assets/mail_icon.png"

const Footer = () => {
  return (
      <div className='mt-20'>
          <div className='text-center'>
              <h1 className='text-4xl mx-auto mb-2 font-bold-800'>Salvador</h1>
              <div className='w-max flex items-center gap-2 mx-auto'>
                  <Image src={email_icon} alt="" className="w-6" />
                  salvadoramerico155@gmail.com
              </div>
          </div>
          <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
              <p>© 2025 Copyright: Salvador Américo Afo </p>
              <ul className='flex items-center gap-10 justify-center mt-4'>
                  <li><a target="_blank" href="https://github.com/5Salvador">GitHub</a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/in/salvador-am%C3%A9rico-afo-832723271/">LinkedIn</a></li>
                  <li><a target="_blank" href="https://www.facebook.com/salvador.americo.39/">Facebook</a></li>
                 
              </ul>
    </div>

    </div>
  )
}

export default Footer