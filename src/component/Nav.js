import React, { useState, useEffect } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#homee');

  useEffect(() => {
    const sectionIds = ['#homee', '#cover', '#experience', '#projects', '#connect'];
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          if (sectionIds.includes(id)) {
            setActiveNav(id);
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.querySelector(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <a
        href="#homee"
        onClick={() => setActiveNav('#homee')}
        className={activeNav === '#homee' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#cover"
        onClick={() => setActiveNav('#cover')}
        className={activeNav === '#cover' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>

      <a
        href="#connect"
        onClick={() => setActiveNav('#connect')}
        className={activeNav === '#connect' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </motion.nav>
  );
};

export default Nav;
