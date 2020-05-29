import {Field, Form, Formik} from "formik";
import React, {FormEvent, useState} from "react";
import * as Yup from "yup";
import "./styles.scss";

const ContactForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSetName = (e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const handleSetEmail = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const handleSetMessage = (e: FormEvent<HTMLInputElement>) => setMessage(e.currentTarget.value);

  const contactFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    message: Yup.string()
      .min(2, "Message Min Length: 2")
      .max(500, "Message Max Length: 500")
      .required("Required"),
    name: Yup.string()
      .min(2, "Name Min Length: 2")
      .max(50, "Name Max length: 50")
      .required("Required"),
  });

  const contactFormSubmit = (values, actions) => {
    const encode = (data: any) => Object.keys(data)
        .map((key: string) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    fetch("https://getform.io/f/afbddb2e-ea78-48ce-b785-7fd6f834f64d", {
      body: encode(values),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
    }).then(() => {
        alert("Good");
        actions.resetForm();
      }).catch(() => {
        alert("Error");
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          "bot-field": "",
          email,
          "form-name": "contact-form",
          message,
          name,
        }}
        onSubmit={contactFormSubmit}
        validationSchema={contactFormSchema}
      >
        {({errors, touched}) => (
          <Form
            name={"contact-form"}
            noValidate={true}
          >
            <div id={"ContactFields"}>
              <label className={errors.name && touched.name ? "form__error" : undefined}>
                Your name {errors.name && touched.name ? ` | ${errors.name}` : ""}
              </label>
              <Field type={"text"} name={"name"} className={"form__input"}/>

              <label className={errors.email && touched.email ? "form__error" : undefined}>
                Your Email {errors.email && touched.email ? ` | ${errors.email}` : ""}
              </label>
              <Field type={"email"} name={"email"} className={"form__input"}/>

              <label className={errors.message && touched.message ? "form__error" : undefined}>
                A Friendly Message {errors.message && touched.message ? ` | ${errors.message}` : ""}
              </label>
              <Field as={"textarea"} name={"message"} className={"form__input message"}/>
              <button type={"submit"}>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
