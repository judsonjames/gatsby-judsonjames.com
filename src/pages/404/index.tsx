import { Link } from "gatsby";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import "./styles.scss";

const ErrorPage = (): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James | 404"}
      description={"This page was not found :("}
      imageRef={"/img/profile_pic.jpg"}
      hideFooter={true}
    >
      <div className={"not-found"}>
        <p className={"not-found__message"}>Whoops... nothing's here</p>
        <Link className={"not-found__redirect"} to={"/"}><p>Let's go home and pretend this didn't happen!</p></Link>
      </div>
    </SiteLayout>
  );
};

export default ErrorPage;
