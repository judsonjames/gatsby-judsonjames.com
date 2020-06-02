import { Link } from "gatsby";
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
          <Link to={"/about-me"}>About</Link>
        </span>
        <span>
          <Link to={"/work"}>Work</Link>
        </span>
        <span>
          <Link to={"/blog"}>Blog</Link>
        </span>
        <span>
          <Link to={"/contact"}>Contact</Link>
        </span>
      </div>
      <div className={"github-link"}>
        Like what you see? Look at <a href={"https://github.com/judsonjames/gatsby-judsonjames.com"}>the source!</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
