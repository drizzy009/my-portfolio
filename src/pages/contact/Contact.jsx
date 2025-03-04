/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Idris Yusuf - Frontend Developer</title>
        <meta
          name="description"
          content="Get in touch with Idris Yusuf for web development projects, collaborations, or inquiries about React and WordPress services."
        />
        <meta
          name="keywords"
          content="Contact, Web Developer, React Developer, WordPress Expert, Hire Me"
        />
        <meta
          property="og:description"
          content="Check out my resume highlighting my experience, skills, and achievements in frontend development."
        />
        <meta
          property="og:url"
          content="https://portfolio-x01.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portfolio-x01.vercel.app/contact" />
      </Helmet>
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
    </>
  );
};

export default Contact;
