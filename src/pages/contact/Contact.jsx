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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur exercitationem dignissimos deserunt accusantium
            sapiente fuga tempora quaerat illo perspiciatis corporis nostrum
            tempore doloremque sunt provident veniam cumque, omnis repudiandae.
            Optio.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
