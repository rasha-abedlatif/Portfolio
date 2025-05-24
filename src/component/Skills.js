import React from 'react';
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience">
  
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Demonstrated Expertise in the Following Areas
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Technical Proficiencies
      </motion.h2>

      <div className="container experience__container">

      
        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {[
              ['HTML', 'Experienced'],
              ['CSS', 'Intermediate'],
              ['JavaScript', 'Experienced'],
              ['Bootstrap', 'Experienced'],
              ['Tailwind', 'Experienced'],
              ['React', 'Experienced'],
            ].map(([tech, level], i) => (
              <article className="experience__details" key={i}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{tech}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            {[
              ['Node JS', 'Experienced'],
              ['Express JS', 'Experienced'],
              ['MongoDB', 'Intermediate'],
              ['MySQL', 'Intermediate'],
              ['Python', 'Experienced'],
            ].map(([tech, level], i) => (
              <article className="experience__details" key={i}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{tech}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>


        <motion.div
          className="experience__seo"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>SEO Skills</h3>
          <div className="experience__content">
            {[
              ['Keyword Research', 'Experienced'],
              ['On-Page SEO', 'Experienced'],
              ['Off-Page SEO', 'Intermediate'],
              ['Technical SEO', 'Intermediate'],
              ['Google Analytics', 'Experienced'],
              ['Content Optimization', 'Experienced'],
            ].map(([skill, level], i) => (
              <article className="experience__details" key={i}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
