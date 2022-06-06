import React, { useState, useEffect } from 'react';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss'

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })


  }, [])

  return (
    <div className='wrapper'>
      <h2 className='head-text'>My Creative <span>Portfolio</span> section</h2>


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsFillEyeFill />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__banner',
);
