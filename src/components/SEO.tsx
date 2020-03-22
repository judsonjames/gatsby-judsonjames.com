import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

export interface ISEOProps {
    title: string;
    description: string;
    currentSite: string;
}

/**
 * Search Engine Optimization Component shared by all pages on the website
 * @constructor
 */
const SEO = (props: ISEOProps): JSX.Element => {
    const {title, description, currentSite} = props;
    const realPrefix: string = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const image = config.siteUrl + realPrefix + config.siteLogo;
    return (
        <Helmet>
            {/* Base HTML Meta Tags*/}
            <html lang={config.siteLanguage}/>
            <title>{title}</title>
            <meta name={"description"} content={description}/>
            <meta charSet={"utf-8"}/>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            <link rel={"canonical"} href={config.siteUrl}/>

            {/* Google */}
            <meta itemProp={"name"} content={currentSite}/>
            <meta itemProp={"description"} content={description}/>
            <meta itemProp={"image"} content={image}/>

            {/* Facebook */}
            <meta property="og:url" content="https://focused-lamarr-93f88f.netlify.com/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ""}/>
            <meta name="twitter:title" content={config.title} />
            <meta name="twitter:description" content={config.description}/>
            <meta name="twitter:image" content={image}/>
        </Helmet>
    );
};

export default SEO;
