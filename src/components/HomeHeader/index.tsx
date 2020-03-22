import React from "react";
import "./styles.scss";

const HomeHeader = (): JSX.Element => {
    return (
        <div className={"home-header"}>
            <img className={"home-header__profile-pic"} src={"/img/profile_pic.jpg"} alt={"profile_picture"}/>
            <h1 className={"home-header__name"}>Judson James</h1>
            <h3 className={"home-header__title"}>Full Stack Developer</h3>
        </div>
    );
};

export default HomeHeader;
