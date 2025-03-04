import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast, Toaster } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e, setFieldValue) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
    setFieldValue(name, value); 
  };

  const handleFormSubmit = async (event, isValid) => {
    event.preventDefault();

    if (!isValid) {
      toast.error("Please fill in all required fields.");
      return; 
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        toast.success("Email sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send email: ${errorData.error}`);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
     <Helmet>
        <title>Contact Idris Yusuf - Frontend Developer</title>
        <meta name="description" content="Get in touch with Idris Yusuf for web development projects, collaborations, or inquiries about React and WordPress services." />
        <meta name="keywords" content="Contact, Web Developer, React Developer, WordPress Expert, Hire Me" />
        <meta property="og:description" content="Check out my resume highlighting my experience, skills, and achievements in frontend development." />
        <meta property="og:url" content="https://portfolio-x01.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portfolio-x01.vercel.app/contact" />
      </Helmet>
      <Toaster position="top-right" closeButton richColors />
      <Formik
        initialValues={userInput}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.message) {
            errors.message = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, isValid }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleFormSubmit(isValid);
          }, 400);
        }}
      >
        {({ isSubmitting, setFieldValue, isValid }) => (
          <div className={styles.formContainer}>
            <Form className={styles.form}>
              <div className={styles.inputField}>
                <Field
                  type="text"
                  name="name"
                  placeholder="‎"
                  id="name"
                  value={userInput.name}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                  required=""
                />
                <label htmlFor="name">Full name</label>
                <ErrorMessage name="name" component="span" />
              </div>
              <div className={styles.inputField}>
                <Field
                  type="email"
                  name="email"
                  placeholder="‎"
                  id="email"
                  value={userInput.email}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                  required=""
                />
                <label htmlFor="email">Email</label>
                <ErrorMessage name="email" component="span" />
              </div>
              <div className={styles.inputField}>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="‎"
                  id="message"
                  value={userInput.message}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                  rows="3"
                  required=""
                />
                <label htmlFor="message">Your message</label>
                <ErrorMessage name="message" component="span" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={(e) => handleFormSubmit(e, isValid)}
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
