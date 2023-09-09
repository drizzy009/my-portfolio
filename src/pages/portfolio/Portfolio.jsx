import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { portfolioData } from "./Data";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const [popupOpen, setPopupOpen] = useState(null);
  const [popupData, setPopupData] = useState(null);

  const openPopup = (id) => {
    const data = portfolioData.find((item) => item.id === id);
    if (data) {
      setPopupData(data);
      setPopupOpen(id);
    }
  };

  const closePopup = () => {
    const popupContent = document.querySelector(`.${styles.popupContent}`);
    if (popupContent) {
      popupContent.classList.add(styles.slideOut);
      setTimeout(() => {
        setPopupOpen(null);
        setPopupData(null);
        popupContent.classList.remove(styles.slideOut);
      }, 500);
    }
  };

  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <div className={`${styles.heading}`}>
          <h1 aria-label="My portfolio">Portfolio</h1>
        </div>
        <div className={`${styles.content}`}>
          <div className={styles.portfolioContainer}>
            {portfolioData.map((portfolio) => (
              <div
                key={portfolio.id}
                className={styles.portfolioBox}
                id={portfolio.id}
              >
                  <img
                    src={portfolio.img}
                    alt={portfolio.alt}
                    onClick={() => openPopup(portfolio.id)}
                  />
                <h4>{portfolio.title}</h4>
                <span>{portfolio.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {popupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button onClick={closePopup} className={styles.closeButton}>
              <IoClose className={styles.closeIcon} />
            </button>
            <h2>{popupData.title}</h2>
            <p>{popupData.description}</p>
            <div className={styles.popupOpened}>
              <img src={popupData.imgFull} alt={popupData.title} />
              <div>
                <h3>{popupData.technology}</h3>
                <p>
                  Check it out{" "}
                  <a href={popupData.url} rel="noreferrer" target="_blank">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
