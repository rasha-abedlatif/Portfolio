import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { IoLogoInstagram } from "react-icons/io";
const Headersocials= () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/rasha-abed-latif' target='_blank'><BsLinkedin/> </a>
         <a href='https://github.com/rasha-abedlatif'  target='_blank'> < FaGithub/>  </a>
          <a href='https://www.instagram.com/rasha.abedlatif/?igsh=ODVlbWY2MDBlOHRi&utm_source=qr' target='_blank'> <IoLogoInstagram /> </a>
    </div>
  )
}

export default Headersocials