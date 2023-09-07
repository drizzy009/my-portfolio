import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput), // Send the userInput object
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
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
        initialValues={userInput} // Initialize the form with userInput
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
          <div className={styles.formContainer}>
            <Form className={styles.form}>
              <div className={styles.inputField}>
                <Field
                  type="text"
                  name="name"
                  placeholder="‎"
                  id="name"
                  value={userInput.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  rows="3"
                />
                <label htmlFor="message">Your message</label>
                <ErrorMessage name="message" component="span" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleFormSubmit}
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
