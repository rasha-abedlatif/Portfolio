import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from "../assets/images/MEE.png"
import Headersocials from './Headersocials'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header>
      <div className='container header_container' id="homee">
        <motion.h5
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Computer & Communication Engineering Student
        </motion.h1>

        <motion.h5
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Coding, Engineering, Innovating
        </motion.h5>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <CTA />
        </motion.div>
        
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.6 }}
>
  <Headersocials />
</motion.div>


        <motion.div
          className='me'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <img src={ME} alt='me' />
        </motion.div>

        <motion.a
          href='#cover'
          className='scroll_down'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  )
}

export default Header
