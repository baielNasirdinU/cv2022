import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import market from "../../img/market.jpg";
import dashboard from "../../img/dashboard.jpg";
import internet from "../../img/internet.jpg";
import "./about.scss";

const About = () => {
  const h3variants = {
    hidden: { x: -1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const works = [
    {
      title: "market",
      id: 1,
      imgUrl: market,
    },
    {
      title: "ddashboard",
      id: 2,
      imgUrl: dashboard,
    },
    {
      title: "internet",
      id: 3,
      imgUrl: internet,
    },
  ];
  const worksvariants = {
    visible: (idx) => ({ opacity: 1, transition: { delay: idx * 0.6 } }),
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div className="about">
      <div className="container about__container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,

              repeat: Infinity,
              repeatDelay: "reverse",

              type: "string",
              velocity: "just",
            }}
            className="about title">
            hello i am hero coder!
          </motion.h1>
          <p className="about__subtitle">front end react devoloper</p>
        </div>

        <div className="about__skills">
          <motion.h3
            variants={h3variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}>
            my skills
          </motion.h3>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
                color: "black",
              }}>
              <FaHtml5 />
              HTML
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
                color: "black",
              }}>
              <FaCss3Alt />
              CSS
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
                color: "black",
              }}>
              <FaSass />
              SASS
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
                color: "black",
              }}>
              <FaReact />
              REACT
            </motion.li>
          </ul>
        </div>
        <div className="about__partfolio">
          <h3>latest works</h3>
          <ul>
            {works.map((work, idx) => (
              <motion.li
                key={idx}
                variants={worksvariants}
                initial={"hidden"}
                animate={"visible"}
                custom={idx}>
                <img src={work.imgUrl} alt={work.title} />
                <h4>{work.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
