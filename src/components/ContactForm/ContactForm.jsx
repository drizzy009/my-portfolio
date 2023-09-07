import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const [userInput, setUserInput] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          name: userInput,
          email: userInput,
        }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        setUserInput("");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.nameField}>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className={styles.emailField}>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={styles.messageField}>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
