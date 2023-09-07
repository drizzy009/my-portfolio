import { PiBookOpenTextBold, PiCircleFill } from "react-icons/pi";
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
            <PiBookOpenTextBold/>
            <h3>Education</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <PiCircleFill/>
            <div className={`${styles.resume_content}`}>
              <h4>Federal University of Agriculture, Abeokuta</h4>
              <span aria-label="Year Duration">2014 - 2020</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui
                distinctio repudiandae sed illo possimus eum, accusantium
                accusamus nihil quo, ab aliquid beatae necessitatibus eaque
                officia ut suscipit temporibus totam?
              </p>
            </div>
          </div>
          <div className={`${styles.resume_row_two}`}>
            <PiCircleFill/>
            <div className={`${styles.resume_content}`}>
              <h4>Federal University of Agriculture, Abeokuta</h4>
              <span aria-label="Year Duration">2014 - 2020</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui
                distinctio repudiandae sed illo possimus eum, accusantium
                accusamus nihil quo, ab aliquid beatae necessitatibus eaque
                officia ut suscipit temporibus totam?
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.resume_container}`}>
          <div className={`${styles.resume_heading}`}>
            <i className="fa-solid fa-book"></i>
            <h3>Education</h3>
          </div>
          <div className={`${styles.resume_row_one}`}>
            <PiCircleFill/>
            <div className={`${styles.resume_content}`}>
              <h4>Federal University of Agriculture, Abeokuta</h4>
              <span aria-label="Year Duration">2014 - 2020</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui
                distinctio repudiandae sed illo possimus eum, accusantium
                accusamus nihil quo, ab aliquid beatae necessitatibus eaque
                officia ut suscipit temporibus totam?
              </p>
            </div>
          </div>
          <div className={`${styles.resume_row_two}`}>
            <PiCircleFill/>
            <div className={`${styles.resume_content}`}>
              <h4>Federal University of Agriculture, Abeokuta</h4>
              <span aria-label="Year Duration">2014 - 2020</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui
                distinctio repudiandae sed illo possimus eum, accusantium
                accusamus nihil quo, ab aliquid beatae necessitatibus eaque
                officia ut suscipit temporibus totam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
