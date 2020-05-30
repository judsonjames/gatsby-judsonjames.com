import React from "react";
import "./styles.scss";

const SiteFooter = (): JSX.Element => {
  return (
    <footer id={"SiteFooter"}>
      <div className={"github-link"}>
        Like what you see? Look at <a href={"https://github.com/judsonjames/gatsby-judsonjames.com"}>the source!</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
