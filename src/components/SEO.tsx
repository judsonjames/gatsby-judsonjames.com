import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

export interface ISEOProps {
    title: string;
    description: string;
}

/**
 * Search Engine Optimization Component shared by all pages on the website
 * @constructor
 */
const SEO = (props: ISEOProps): JSX.Element => {
    const {title, description} = props;
    const realPrefix: string = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const image = config.siteUrl + realPrefix + config.siteLogo;
    return (
        <Helmet>
            <html lang={config.siteLanguage}/>
            <title>{title}</title>
            <meta name={"description"} content={description}/>
            <meta charSet={"utf-8"}/>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            <link rel={"canonical"} href={config.siteUrl}/>
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