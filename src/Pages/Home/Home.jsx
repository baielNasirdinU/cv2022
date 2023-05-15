// import React from "react";
import { useRef, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./home.scss";
import PhotoMan from "../../img/man.jpg";
import { motion } from "framer-motion";
import { init } from "ityped";

const Home = () => {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Baiel Nasirdin uulu", "front end devoloper"],
      backDelay: 1500,
      backSpeed: 60,
      typeSpeed: 100,
    });
  }, []);
  return (
    <>
      <section className="home">
        <div className="container home__container">
          <motion.div
            className="home__left"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}>
            <h1 className="home__title"> hi i'm </h1>
            <p className="home__subtitle">
              <span ref={animatedTextRef}></span>
            </p>
            <p>
              I am Baiel Nasirdin uulu , 2001 in Osh. I'm responsible, highly
              motivated, interested in web programming and everything in its
              orbit person. I'm keen to gain more experience and knowledge in
              programming.
            </p>

            <ul className="home__links">
              <li>
                <a
                  href="http://fb.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook className="home__icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/baiel-nasirdinuulu"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="home__icon" />
                </a>
              </li>
              <li>
                <a
                  href="http://fb.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn className="home__icon" />
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="home__right"
            whileHover={{ scale: 1.1 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}>
            <img src={PhotoMan} alt="" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
