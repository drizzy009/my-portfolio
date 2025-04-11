import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { navList } from "./Data";
import styles from "../Header/Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(
    localStorage.getItem("activePage") || "About"
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    localStorage.setItem("activePage", active);
  }, [active]);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <>
      <nav className={`${styles.nav_background}`}>
        <ul className={`${styles.nav_main}`}>
          {navList.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? styles.text_white : styles.text_black
              } ${index === navList.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => {
                if (!nav.id.includes(".pdf")) handleNavClick(nav.title);
              }}
            >
              {nav.id.includes(".pdf") ? (
                <a href={nav.id} target="_blank" rel="noopener noreferrer">
                  {nav.title}
                </a>
              ) : (
                <NavLink to={nav.id}>{nav.title}</NavLink>
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
                  className={`${
                    active === nav.title ? styles.text_white : styles.text_black
                  } ${index === navList.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    if (!nav.id.includes(".pdf")) handleNavClick(nav.title);
                    else setToggle(false);
                  }}
                >
                  {nav.id.includes(".pdf") ? (
                    <a href={nav.id} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <NavLink to={nav.id}>{nav.title}</NavLink>
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
