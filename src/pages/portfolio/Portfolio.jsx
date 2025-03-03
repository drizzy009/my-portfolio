import { motion } from "framer-motion";
import { portfolioData } from "./Data";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <div className={`${styles.heading}`}>
          <h1 aria-label="My portfolio">Portfolio</h1>
        </div>
        <div className={`${styles.content}`}>
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
                  stiffness: 150
                }}
                onClick={() => window.open(portfolio.url, "_blank")}
              >
                <div className={styles.portfolioImageWrapper}>
                  <img
                    src={portfolio.img}
                    alt={portfolio.alt}
                  />
                </div>
                <h4>{portfolio.title}</h4>
                <span>{portfolio.caption}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
