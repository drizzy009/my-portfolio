import { PiBookOpenTextBold } from "react-icons/pi";
import {GiAchievement} from 'react-icons/gi'
import {GrTechnology} from 'react-icons/gr'
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <div className={`${styles.heading}`}>
          <h1 aria-label="About me heading">My Resume</h1>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <PiBookOpenTextBold />
            <h3>Education</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <div className={`${styles.resume_content}`}>
              <h4>Federal University of Agriculture, Abeokuta</h4>
              <span aria-label="Year Duration">2014 - 2020</span>
              <p>BSc in Aquaculture & Fisheries Mgt</p>
            </div>
          </div>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <GiAchievement />
            <h3>Achievement</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <div className={`${styles.resume_content}`}>
              <ul>
                <li>
                  Identified and fixed clients payment integration on
                  woocommerce.
                </li>
                <li>
                  Successfully retrived an already hacked wordpress website
                  injected with malwares.
                </li>
                <li>
                  Learnt to integrate an AI Powered Growth Marketing suite
                  (Netcore Cloud) that enables brands to listen, analyse, and
                  converse & improve conversions across Mobile App and Website.
                </li>
                <li>
                  Built a fully functional website from scratch for a client
                  using a UI/UX provided by the product designers.
                </li>
                <li>
                  Managed multiple client WordPress sites, including setting up
                  new sites, maintaining and updating existing sites, and
                  troubleshooting any issues that arose.
                </li>
                <li>
                  Successfully maintained the functionality of multiple plugins
                  across client sites, including identifying and resolving
                  conflicts and errors.
                </li>
                <li>
                  {" "}
                  Utilized SiteGround to stage and test client websites before
                  deployment, ensuring a smooth and seamless transition to live sites.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <GrTechnology style={{color: "var(--white)"}} />
            <h3>Technologies Used</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <div className={`${styles.resume_content}`}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
