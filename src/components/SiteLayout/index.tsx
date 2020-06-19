import React from "react";
import SEO, { ISEOProps } from "../SEO";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "./styles.scss";

interface ISiteLayoutProps extends ISEOProps {
  children: JSX.Element;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const SiteLayout = (props: ISiteLayoutProps): JSX.Element => {
  const {title, description, imageRef, hideHeader, hideFooter} = props;
  return (
    <div id={"site-layout"}>
      <SEO title={title} description={description} imageRef={imageRef}/>
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
