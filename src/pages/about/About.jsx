/* eslint-disable react/no-unescaped-entities */
import { SiWordpress } from "react-icons/si";
import { FaCode, FaVirusCovidSlash } from "react-icons/fa6";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <div className={`${styles.heading}`}>
          <h1 aria-label="About me heading">About me</h1>
        </div>
        <div className={`${styles.content}`}>
          <p>
            I'm a passionate frontend developer with 2 years of experience,
            specializing in HTML, CSS, JavaScript, and React.js. I excel in
            crafting intuitive and visually appealing user experiences.
            Currently at Axon Analytics Limited, I design and maintain websites,
            collaborate with UI designers, and communicate effectively with
            non-technical stakeholders. I'm eager to contribute to innovative
            teams.
          </p>
        </div>
        <div className={`${styles.heading}`}>
          <h2 aria-label="What i do">What I do</h2>
          <div className={`${styles.flexbox}`}>
            <motion.div
              className={`${styles.flex_cols}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <div className={styles.flex_cols_box}>
                <FaCode />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Frontend Development</h3>
                <p>
                  With a keen eye for design, I specialize in crafting
                  captivating user interfaces using HTML, CSS, and JavaScript,
                  ensuring seamless and visually stunning web experiences that
                  leave a lasting impression.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.flex_cols}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <div className={styles.flex_cols_box}>
                <SiWordpress />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Wordpress Web Development</h3>
                <p>
                  Building and customizing high-performance WordPress websites
                  tailored to perfection. I specialize in robust security setups
                  to fortify your site against potential threats and ensure
                  rock-solid protection.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.flex_cols}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <div className={styles.flex_cols_box}>
                <FaVirusCovidSlash />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Wordpress Malware Removal</h3>
                <p>
                  Proficient in WordPress malware removal, I efficiently detect
                  and eliminate threats, ensuring your website's safety and
                  uninterrupted performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.flex_cols}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <div className={styles.flex_cols_box}>
                <SiWordpress />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Other services offered</h3>
                <p>
                  Beyond web design, I can assist with website domain and
                  hosting solutions, seamless WordPress site migrations, email
                  setup, and an array of other services to optimize your online
                  presence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
