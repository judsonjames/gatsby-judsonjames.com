import React from "react";
import AboutSection from "../../components/AboutSection";
import SiteLayout from "../../components/SiteLayout";

const AboutMe = (): JSX.Element => {
  return (
    <SiteLayout
      title={"About Me"}
      description={"A short, but informative section giving you an idea of who I am and what I do."}
      imageRef={"/img/profile_pic.jpg"}
    >
        <AboutSection/>
    </SiteLayout>
  );
};

export default AboutMe;
