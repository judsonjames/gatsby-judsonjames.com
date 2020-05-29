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

  const contactFormSubmit = () => {
    alert("Success!");
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
            data-netlify={"true"}
            data-netlify-honeypot={"bot-field"}
            data-netlify-recaptcha={"true"}
            name={"contact-form"}
            noValidate={true}
          >
            <Field type={"hidden"} name={"bot-field"}/>
            <Field type={"hidden"} name={"form-name"}/>
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
