import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside
      style={{
        background: "hsl(218, 30%, 20%)",
        maxWidth: 240,
        position: "absolute",
        borderRadius: 30,
        padding: 20
      }}
    >
      <div className={`${styles.sidebar_row_one}`}>
        <img
          src="https://axonanalytics.com.ng/wp-content/uploads/2022/01/Idris-Yusuf.jpg"
          width={64}
          height={64}
          alt="Idris Yusuf"
        />
        <span aria-label="Developers name">Idris Yusuf</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          suscipit.
        </p>
      </div>
      <hr />
      <div>
        <div>
          <span>Email</span>
          <p>yusid03@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
