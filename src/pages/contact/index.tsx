import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import SiteLayout from "../../components/SiteLayout";
import "./styles.scss";

const SuccessfulForm = (
  <div className={`confirmation-dialogue`}>
    <iframe
      src="https://giphy.com/embed/26tPplGWjN0xLybiU"
      width="480"
      height="360"
      frameBorder="0"
      className="giphy-embed"
    />
    <p>
      Your message is sent and you'll hear back from me ASAP!
    </p>
  </div>
);

const FailedForm = (
  <div className={`confirmation-dialogue`}>
    <iframe
      src="https://giphy.com/embed/dACqNmvAfY12M"
      width="480"
      height="360"
      frameBorder="0"
      className="giphy-embed"
    />
    <p>
      Unfortunately the Form failed to send a response.
    </p>
    <p>
      Please try refreshing the page and try again.
    </p>
  </div>
);

const Contact = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailure] = useState<boolean>(false);

  const handleFailure = () => setFailure(true);
  const handleSuccess = () => setSuccess(true);

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
        {success
          ? SuccessfulForm
          : failed
            ? FailedForm
              : <ContactForm handleFailure={handleFailure} handleSuccess={handleSuccess}/>
        }
      </div>
    </SiteLayout>
  );
};

export default Contact;
