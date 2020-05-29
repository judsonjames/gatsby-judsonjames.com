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
  path: string;
  title: string;
}

const validPaths: IPath[] = [
  {
    icon: <Home className={"header__nav-icon"}/>,
    path: "/",
    title: "Home",
  },
  {
    icon: <Face className={"header__nav-icon"}/>,
    path: "/about-me",
    title: "About Me",
  },
  {
    icon: <Work className={"header__nav-icon"}/>,
    path: "/work",
    title: "Work",
  },
  {
    icon: <Blog className={"header__nav-icon"}/>,
    path: "/blog",
    title: "Blog",
  },
  {
    icon: <Email className={"header__nav-icon"}/>,
    path: "/contact",
    title: "Contact",
  },
];

const SiteHeader = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  React.useEffect(() => {
    const url: string = !!window ? window.location.href : "";
    validPaths.forEach((path: IPath, i: number) => {
      const searchTerm: string = path.path.replace("/", "");
      if (url.split("/").includes(searchTerm)) {
        setActiveTab(i);
      }
    });
  }, []);

  return (
    <div id={"site-header"}>
      {validPaths.map((path: IPath, i: number) => {
        return (
          <a key={i} href={path.path.toLowerCase()}>
            <div key={i}>
              {path.icon}
              <p key={i}>
                {path.title}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SiteHeader;
