import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import "./styles.scss";

const HomeHeader = (): JSX.Element => {
  const scrollToAboutSection = () => scrollTo("#about");

  return (
    <div id={"HomeHeader"}>
      <img className={"home-header__profile-pic"} src={"/img/profile_pic.jpg"} alt={"profile_picture"}/>
      <h1 className={"home-header__name"}>Judson James</h1>
      <h3 className={"home-header__title"}>Full Stack Engineer</h3>
      <div className={"home-header__buttons"}>
        <a href={"/docs/JudsonJames-Resume.pdf"}>
          <div>
            <span>Resume</span>
          </div>
        </a>
        <a href={"/about-me"}>
          <div>
            <span>Who am I?</span>
          </div>
        </a>
      </div>
      {/*<img*/}
      {/*  className={"home-header__chevron"}*/}
      {/*  src={"/svg/chevron_down.svg"}*/}
      {/*  alt={"chevron_down"}*/}
      {/*  onClick={scrollToAboutSection}*/}
      {/*/>*/}
    </div>
  );
};

export default HomeHeader;
