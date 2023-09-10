import { useState } from "react";
import { PiMinusBold } from "react-icons/pi";
import {
  IoMailSharp,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoCall,
  IoToday,
  IoLocation,
} from "react-icons/io5";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <aside className={`${styles.aside} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? (
          <>
            <PiMinusBold className={styles.closeIcon} />
            <div className={styles.tooltip}>Tap to exit</div>
          </>
        ) : (
          <>
            <div className={`${styles.hamburgerLine}`}>
              <span aria-label="My Profile">View Profile</span>
            </div>
          </>
        )}
      </div>

      {/*Desktop View */}
      <div className={styles.mainList}>
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
          <a
            href="https://github.com/drizzy009"
            aria-label="My GitHub profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://twitter.com/drizzy0x_"
            aria-label="My Twitter profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://instagram.com/drizzy0x"
            aria-label="My instagram profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
        </div>
      </div>

      {/*Mobile View */}
      <div className={styles.mobileList}>
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
        <hr style={{ width: "60%", margin: "auto" }} />
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
          <a
            href="https://github.com/drizzy009"
            aria-label="My GitHub profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://twitter.com/drizzy0x_"
            aria-label="My Twitter profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://instagram.com/drizzy0x"
            aria-label="My instagram profile"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
