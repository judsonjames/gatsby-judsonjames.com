import React from "react";
import AboutSection from "../../components/AboutSection";
import SiteLayout from "../../components/SiteLayout";

const AboutMe = (): JSX.Element => {
  return (
    <SiteLayout title={"About Me"} description={""} imageRef={""}>
        <AboutSection/>
    </SiteLayout>
  );
};

export default AboutMe;
