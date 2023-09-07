import { SiWordpress } from "react-icons/si";
import { FaCode, FaVirusCovidSlash } from 'react-icons/fa6';
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            beatae fugit nobis labore! Placeat odio alias non officia ea,
            consectetur debitis neque facilis inventore corporis, perferendis
            velit nisi unde vel facere corrupti libero! Odit necessitatibus iste
            animi eaque voluptates ab! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi quam quaerat ab sunt sit voluptas eveniet
            rem explicabo dolores quas!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit aspernatur et temporibus asperiores quibusdam magni
            exercitationem, sequi veniam, ullam dignissimos aliquid ut,
            laudantium vitae officia repellat. Eligendi, sed porro.
          </p>
        </div>
        <div className={`${styles.heading}`}>
          <h2 aria-label="What i do">What I do</h2>
          <div className={`${styles.flexbox}`}>
            <div className={`${styles.flex_cols}`}>
              <div className={styles.flex_cols_box}>
                <FaCode />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Frontend Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos odio numquam a doloremque nostrum aperiam
                  odit reiciendis alias tenetur.
                </p>
              </div>
            </div>
            <div className={`${styles.flex_cols}`}>
              <div className={styles.flex_cols_box}>
                <SiWordpress />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Wordpress Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos odio numquam a doloremque nostrum aperiam
                  odit reiciendis alias tenetur.
                </p>
              </div>
            </div>
            <div className={`${styles.flex_cols}`}>
              <div className={styles.flex_cols_box}>
                <FaVirusCovidSlash />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Wordpress Malware Removal</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos odio numquam a doloremque nostrum aperiam
                  odit reiciendis alias tenetur.
                </p>
              </div>
            </div>
            <div className={`${styles.flex_cols}`}>
              <div className={styles.flex_cols_box}>
                <SiWordpress />
              </div>
              <div className={styles.flex_cols_box}>
                <h3>Wordpress Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos odio numquam a doloremque nostrum aperiam
                  odit reiciendis alias tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
