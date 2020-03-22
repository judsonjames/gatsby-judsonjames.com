import React from "react";
import "./styles.scss";

interface IMenuItemProps {
    text: string;
    redirect: string;
    active: boolean;
}

interface IPath {
    name: string;
    path: string;
}

const validPaths: IPath[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Contact",
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
                return <MenuItem key={i} text={path.name} redirect={path.path.toLowerCase()} active={i === activeTab}/>;
            })}
        </div>
    );
};

export default SiteHeader;
