import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "./styles.scss";

interface SiteLayoutProps {
    children: JSX.Element;
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const SiteLayout = (props: SiteLayoutProps): JSX.Element => {
    const { hideHeader, hideFooter } = props;
    return (
        <div id={"site-layout"}>
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
