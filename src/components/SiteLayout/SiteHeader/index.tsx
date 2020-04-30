import React from "react";
import Blog from "../../../../static/svg/book.svg";
import Email from "../../../../static/svg/email.svg";
import Home from "../../../../static/svg/home.svg";
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
}

const validPaths: IPath[] = [
    {
        icon: <Home className={"header__nav-icon"}/>,
        path: "/",
    },
    {
        icon: <Work className={"header__nav-icon"}/>,
        path: "/work",
    },
    {
        icon: <Blog className={"header__nav-icon"}/>,
        path: "/blog",
    },
    {
        icon: <Email className={"header__nav-icon"}/>,
        path: "/contact",
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

    const MenuItem = (props: IMenuItemProps): JSX.Element => {
        const {text, redirect, active} = props;
        return (
            <div className={`menu-item ${active ? "active" : ""}`}>
                <a href={`${redirect}`}>{text}</a>
            </div>
        );
    };

    return (
        <div id={"site-header"}>
            {validPaths.map((path: IPath, i: number) => {
                return (
                    <a key={i} href={path.path.toLowerCase()}>
                        {path.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default SiteHeader;
