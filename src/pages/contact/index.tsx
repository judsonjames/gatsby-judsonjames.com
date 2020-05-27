import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {FormEvent, useState} from "react";
import * as Yup from "yup";
import SiteLayout from "../../components/SiteLayout";

const Contact = (): JSX.Element => {
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
            .max(250, "Message Max Length: 250")
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
        <SiteLayout
            title={"Judson James | Contact"}
            description={"Contact Judson for more information."}
            imageRef={"/img/profile_pic.jpg"}
        >
            <div>
                <Formik
                    initialValues={{
                        "bot-field": "",
                        "form-name": "contact-form",
                        email, message, name,
                    }}
                    onSubmit={contactFormSubmit}
                    validationSchema={contactFormSchema}
                >
                    <Form
                        data-netlify={"true"}
                        data-netlify-honeypot={"bot-field"}
                        data-netlify-recaptcha={"true"}
                        name={"contact-form"}
                        noValidate={true}
                    >
                        <Field type={"hidden"} name={"bot-field"}/>
                        <Field type={"hidden"} name={"form-name"}/>
                        <Field type={"text"} name={"name"}/>
                        <ErrorMessage name={"name"}/>
                        <Field type={"email"} name={"email"}/>
                        <ErrorMessage name={"email"}/>
                        <Field type={"text"} name={"message"}/>
                        <ErrorMessage name={"message"}/>
                        <button type={"submit"}>Submit</button>
                    </Form>
                </Formik>
            </div>
        </SiteLayout>
    );
};

export default Contact;
