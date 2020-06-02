import { Link } from "gatsby";
import React from "react";
// @ts-ignore
import Blog from "../../../../static/svg/book.svg";
// @ts-ignore
import Email from "../../../../static/svg/email.svg";
// @ts-ignore
import Face from "../../../../static/svg/face.svg";
// @ts-ignore
import Home from "../../../../static/svg/home.svg";
// @ts-ignore
import Work from "../../../../static/svg/work.svg";
import "./styles.scss";

interface IMenuItemProps {
  text: string;
  redirect: string;
  active: boolean;
}

interface IPath {
  icon: JSX.Element;
  slug: string;
  title: string;
}

const validPaths: IPath[] = [
  {
    icon: <Home className={"header__nav-icon"}/>,
    slug: "/",
    title: "Home",
  },
  {
    icon: <Face className={"header__nav-icon"}/>,
    slug: "/about-me",
    title: "About Me",
  },
  {
    icon: <Work className={"header__nav-icon"}/>,
    slug: "/work",
    title: "Work",
  },
  {
    icon: <Blog className={"header__nav-icon"}/>,
    slug: "/blog",
    title: "Blog",
  },
  {
    icon: <Email className={"header__nav-icon"}/>,
    slug: "/contact",
    title: "Contact",
  },
];

const SiteHeader = (): JSX.Element => {
  /**
   * Helper function to check for active tab status
   * @param {string} slug
   * @returns isActiveTab
   */
  // const checkActiveTab = (slug: string): boolean => {
  //   const url: string = !!window ? window.location.href : "";
  //   return url.includes(slug);
  // };

  return (
    <div id={"site-header"}>
      {validPaths.map((path: IPath, i: number) => {
        return (
          <Link key={`${path.title}`} to={path.slug.toLowerCase()} activeClassName={"active"}>
            <div key={i}>
              {path.icon}
              <p key={i}>
                {path.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SiteHeader;
