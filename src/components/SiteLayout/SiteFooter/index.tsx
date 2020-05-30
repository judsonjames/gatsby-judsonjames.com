import React from "react";
import "./styles.scss";

const SiteFooter = (): JSX.Element => {
  return (
    <footer id={"SiteFooter"}>
      <div className={"general-links"}>
        <span>
          <a href={"https://github.com/judsonjames"}>GitHub</a>
        </span>
        <span>
          <a href={"/about-me"}>About</a>
        </span>
        <span>
          <a href={"/work"}>Work</a>
        </span>
        <span>
          <a href={"/blog"}>Blog</a>
        </span>
        <span>
          <a href={"/contact"}>Contact</a>
        </span>
      </div>
      <div className={"github-link"}>
        Like what you see? Look at <a href={"https://github.com/judsonjames/gatsby-judsonjames.com"}>the source!</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
