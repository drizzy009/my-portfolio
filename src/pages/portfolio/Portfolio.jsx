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
          <div className={styles.portfolioContainer}>
            {portfolioData.map((portfolios) => (
              <div key={portfolios.id} className={styles.portfolioBox}>
                <img src={portfolios.img} alt={portfolios.alt} />
                <h4>{portfolios.title}</h4>
                <span>{portfolios.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
