import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navList } from "./Data";
import styles from "../Header/Header.module.scss";
import { close, menu } from "../../assets/index";

const Header = () => {
  const [active, setActive] = useState(
    localStorage.getItem("activePage") || "About"
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    localStorage.setItem("activePage", active);
  }, [active]);

  return (
    <>
      <nav className={`${styles.nav_background}`}>
        <ul className={`${styles.nav_main}`}>
          {navList.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? `${styles.text_white}`
                  : `${styles.text_black}`
              } ${index === navList.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <NavLink to={nav.id}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>
        {/*<button className={`${styles.navbtnConnect} sm:flex hidden `}>Connect wallet</button>*/}

        <div className={`${styles.nav_mobile_main}`}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=""
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"}`}>
            <ul className={`${styles.nav_mobile}`}>
              {navList.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navList.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <NavLink to={nav.id}>{nav.title}</NavLink>
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
