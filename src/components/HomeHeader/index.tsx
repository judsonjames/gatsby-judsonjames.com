import React from "react";
import "./styles.scss";

const HomeHeader = (): JSX.Element => {
  return (
    <div id={"HomeHeader"}>
      <div>
        <img className={"home-header__profile-pic"} src={"/img/profile_pic.jpg"} alt={"profile_picture"}/>
        <h1 className={"home-header__name"}>Judson James</h1>
        <h3 className={"home-header__title"}>Full Stack Engineer</h3>
        <div className={"home-header__buttons"}>
          <a href={"/docs/JudsonJames-Resume.pdf"} target={"_"}>
            <div>
              <span>Resume</span>
            </div>
          </a>
          <a href={"https://github.com/judsonjames"} target={"_"}>
            <div>
              <span>GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
