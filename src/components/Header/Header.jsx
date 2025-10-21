import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { navList } from "./Data";
import styles from "../Header/Header.module.scss";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`${styles.nav_background}`}>
        <ul className={`${styles.nav_main}`}>
          {navList.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index === navList.length - 1 ? "mr-0" : "mr-10"}`}
            >
              {nav.id.includes(".pdf") ? (
                <a href={nav.id} target="_blank" rel="noopener noreferrer" className={styles.text_black}>
                  {nav.title}
                </a>
              ) : (
                <NavLink to={nav.id} className={({ isActive }) => isActive ? styles.text_white : styles.text_black}>
                  {nav.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className={`${styles.nav_mobile_main}`}>
          <span
            className={styles.harmburger}
            role="menu"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <CgClose />
            ) : (
              <CgMenuLeft style={{ transform: "rotate(180deg)" }} />
            )}
          </span>
          <div className={`${toggle ? styles.flex : styles.hidden}`}>
            <ul className={`${styles.nav_mobile}`}>
              {navList.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${index === navList.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setToggle(false)}
                >
                  {nav.id.includes(".pdf") ? (
                    <a href={nav.id} target="_blank" rel="noopener noreferrer" className={styles.text_black}>
                      {nav.title}
                    </a>
                  ) : (
                    <NavLink to={nav.id} className={({ isActive }) => isActive ? styles.text_white : styles.text_black}>
                      {nav.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;