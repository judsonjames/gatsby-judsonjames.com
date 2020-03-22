import React from "react";
import SEO from "../SEO";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "./styles.scss";

interface SiteLayoutProps {
    children: JSX.Element;
    title: string;
    description: string;
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const SiteLayout = (props: SiteLayoutProps): JSX.Element => {
    const { title, description, hideHeader, hideFooter } = props;
    return (
        <div id={"site-layout"}>
            <SEO title={title} description={description}/>
            {!hideHeader &&
                <SiteHeader/>
            }
            {props.children}
            {!hideFooter &&
                <SiteFooter/>
            }
        </div>
    );
};

export default SiteLayout;
