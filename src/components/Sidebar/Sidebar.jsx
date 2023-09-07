import {
  IoMailSharp,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoCall,
  IoToday,
  IoLocation
} from "react-icons/io5";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside
      style={{
        background: "hsl(218, 30%, 20%)",
        maxWidth: 310,
        position: "absolute",
        borderRadius: 30,
        paddingTop: 40,
        paddingRight: 30,
        paddingBottom: 20,
        paddingLeft: 30,
      }}
    >
      <div className={`${styles.sidebar_row_one}`}>
        <img
          src="https://axonanalytics.com.ng/wp-content/uploads/2022/01/Idris-Yusuf.jpg"
          width={64}
          height={64}
          alt="Idris Yusuf"
        />
        <span aria-label="Developers name">Sirdi Fusuy</span>
        <span aria-label="My role">Frontend Developer</span>
      </div>
      <hr />
      <div className={styles.myInfo}>
        <div className={styles.icon}>
          <IoMailSharp />
        </div>
        <div className={styles.content}>
          <span>Email</span>
          <p>idris.dev0x@gmail.com</p>
        </div>
      </div>
      <div className={styles.myInfo}>
        <div className={styles.icon}>
          <IoCall />
        </div>
        <div className={styles.content}>
          <span>Mobile Number</span>
          <p>+2348101064478</p>
        </div>
      </div>
      <div className={styles.myInfo}>
        <div className={styles.icon}>
          <IoToday />
        </div>
        <div className={styles.content}>
          <span>Day of Birth</span>
          <p>May 13</p>
        </div>
      </div>
      <div className={styles.myInfo}>
        <div className={styles.icon}>
          <IoLocation />
        </div>
        <div className={styles.content}>
          <span>Location</span>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://github.com/drizzy009" rel="noreferrer" target="_blank">
          <IoLogoGithub />
        </a>
        <a
          href="https://twitter.com/drizzy0x_"
          rel="noreferrer"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://instagram.com/drizzy0x"
          rel="noreferrer"
          target="_blank"
        >
          <IoLogoInstagram />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
