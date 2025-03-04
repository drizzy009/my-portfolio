import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { portfolioData } from "./Data";
import acfIcon from "../../assets/acf.svg";
import { FaReact, FaWordpress, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import styles from "./Portfolio.module.scss";
import { FaElementor } from "react-icons/fa6";

const stackIcons = {
  WordPress: (
    <div className={styles.stackIconsGroup}>
      <FaWordpress className={styles.icon} style={{ color: "#21759b" }} />
      <FaElementor className={styles.icon} style={{ color: "#92003B" }} />
    </div>
  ),
  "WordPress-Dynamic": (
    <div className={styles.stackIconsGroup}>
      <FaWordpress className={styles.icon} style={{ color: "#21759b" }} />
      <FaElementor className={styles.icon} style={{ color: "#92003B" }} />
      <img src={acfIcon} alt="ACF Icon" className={styles.acfIcon} />
    </div>
  ),
  ReactJS: <FaReact className={styles.icon} style={{ color: "#61DBFB" }} />,
  HTML5: <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  CSS3: <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} />,
  JavaScript: <FaJs className={styles.icon} style={{ color: "#F7DF1E" }} />,
  Sass: <SiSass className={styles.icon} style={{ color: "#CC6699" }} />,
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>My Portfolio - Idris Yusuf | Frontend Developer</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing projects built with React, WordPress, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Frontend Portfolio, React Projects, WordPress Development, UI/UX Design"
        />
        <meta
          property="og:url"
          content="https://portfolio-x01.vercel.app/portfolio"
        />
        <link
          rel="canonical"
          href="https://portfolio-x01.vercel.app/portfolio"
        />
      </Helmet>
      <section className={styles.relative}>
        <div className={styles.main_container}>
          <div className={styles.heading}>
            <h1 aria-label="My portfolio">Portfolio</h1>
          </div>
          <div className={styles.content}>
            <motion.div
              className={styles.portfolioContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {portfolioData.map((portfolio, index) => (
                <motion.div
                  key={portfolio.id}
                  className={styles.portfolioBox}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                  }}
                  onClick={() => window.open(portfolio.url, "_blank")}
                >
                  <div className={styles.portfolioImageWrapper}>
                    <img src={portfolio.img} alt={portfolio.alt} />
                  </div>
                  <h4>{portfolio.title}</h4>
                  <div className={styles.captionContainer}>
                    <span>{portfolio.caption}</span>
                    <motion.div
                      className={styles.stackIcon}
                      animate={{ rotate: 360 }}
                      // transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    >
                      {stackIcons[portfolio.technology]}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
