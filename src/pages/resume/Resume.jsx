import { PiBookOpenTextBold } from "react-icons/pi";
import { GiAchievement } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import { FaReact, FaCss3Alt, FaHtml5, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiSass } from 'react-icons/si';
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
              <p>BSc in Aquaculture & Fisheries Management</p>
            </div>
          </div>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <GiAchievement />
            <h3>Achievements</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <div className={`${styles.resume_content}`}>
              <ul>
                <li>
                  Spearheaded the complete redesign and redevelopment of UBA Group and UBA Nigeria websites, building over 150 pages.
                </li>
                <li>
                  Built a sophisticated event landing page using ReactJS that automatically generates personalized QR codes for user registrations.
                </li>
                <li>
                  Developed multiple API integrations, including stock, news, and currency exchange APIs, for dynamic data updates.
                </li>
                <li>
                  Managed and maintained multiple WordPress client websites, ensuring functionality, plugin compatibility, and security.
                </li>
                <li>
                  Successfully integrated AI-driven marketing features using the Netcore Cloud platform, improving website engagement.
                </li>
                <li>
                  Delivered over 40 dynamic landing pages for marketing campaigns, optimizing user engagement and conversions.
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
              <div className={styles.tech_icons}>
                <FaHtml5 />
                <FaCss3Alt />
                <FaReact />
                <SiTailwindcss />
                <SiSass />
                <FaWordpress />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <GiAchievement />
            <h3>Work Experience</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <div className={`${styles.resume_content}`}>
              <h4>Frontend Developer</h4>
              <span aria-label="Year Duration">Aug 2022 - Present</span>
              <p>Axon Analytics Limited</p>
              <ul>
                <li>
                  Develop clean and intuitive front-end interfaces in collaboration with the UI/UX team.
                </li>
                <li>
                  Manage the design and development of large-scale corporate websites, ensuring optimal workflow.
                </li>
                <li>
                  Conduct quality assurance testing to identify errors and improve usability.
                </li>
                <li>
                  Delivered over 40 dynamic landing pages on time, contributing significantly to marketing initiatives.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
