/* eslint-disable react/no-unescaped-entities */
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={`${styles.relative}`}>
      <div className={`${styles.main_container}`}>
        <div className={`${styles.heading}`}>
          <h1 aria-label="Send me an email">Contact me</h1>
        </div>
        <div className={styles.formContainer}>
          <p>
            Thank you for considering reaching out to me. Whether you have
            questions, want to discuss a project, or just want to connect, I'd
            love to hear from you.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
