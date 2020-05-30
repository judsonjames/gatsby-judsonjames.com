import React from "react";
import ContactForm from "../../components/ContactForm";
import SiteLayout from "../../components/SiteLayout";
import "./styles.scss";

const Contact = (): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James | Contact"}
      description={"Contact Judson for more information."}
      imageRef={"/img/profile_pic.jpg"}
    >
      <div id={"ContactPage"}>
        <h1>Contact Me!</h1>
        <p>
          I'm actively working on new and exciting projects, but I'm always willing to hear what others are
          working on and need help completing. This can be a web app, a server application, or general applications.
          <br/>
          If you'd like to contact me, feel free to enter your contact information and a semi-brief
          description of what you're working on. I'll get back to you ASAP!
        </p>
        <ContactForm/>
      </div>
    </SiteLayout>
  );
};

export default Contact;
