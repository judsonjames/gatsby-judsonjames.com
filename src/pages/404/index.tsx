import React from "react";
import SiteLayout from "../../components/SiteLayout";
import "./styles.scss";

const ErrorPage = (): JSX.Element => {
    return (
        <SiteLayout
            title={"Judson James | 404"}
            description={"This page was not found :("}
            hideHeader={true}
            hideFooter={true}
        >
            <div className={"not-found"}>
                <p className={"not-found__message"}>Whoops... nothing's here</p>
                <a className={"not-found__redirect"} href={"/"}><p>Let's go home and pretend this didn't happen!</p></a>
            </div>
        </SiteLayout>
    );
};

export default ErrorPage;
