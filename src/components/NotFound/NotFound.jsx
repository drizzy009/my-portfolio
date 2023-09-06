import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <>
          <h1 aria-label="Not Found">Nothing Here Yet</h1>
        </>
      </div>
    </section>
  );
};

export default NotFound;
