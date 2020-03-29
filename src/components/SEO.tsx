import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

export interface ISEOProps {
    title: string;
    description: string;
    imageRef: string;
}

/**
 * Search Engine Optimization Component shared by all pages on the website
 * @constructor
 */
const SEO = (props: ISEOProps): JSX.Element => {
    const {title, description, imageRef} = props;
    const realPrefix: string = config.pathPrefix === "/" ? "" : config.pathPrefix;
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
            <meta itemProp={"name"} content={title}/>
            <meta itemProp={"description"} content={description}/>
            <meta itemProp={"image"} content={imageRef}/>

            {/* Facebook */}
            <meta property="og:url" content={config.siteUrl}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={imageRef}/>

            {/* Twitter */}
            <meta name="twitter:card" content={title}/>
            <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ""}/>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={imageRef}/>
        </Helmet>
    );
};

export default SEO;
