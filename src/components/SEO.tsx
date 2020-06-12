import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

export interface ISEOProps {
  title: string;
  description: string;
  imageRef: string;
  tags?: string;
}

/**
 * Search Engine Optimization Component shared by all pages on the website
 * @constructor
 */
const SEO = (props: ISEOProps): JSX.Element => {
  const {title, description, imageRef, tags} = props;
  const realPrefix: string = config.pathPrefix === "/" ? "" : config.pathPrefix;
  const baseKeyWords: string = "judsonjames, Judson, James, developer, engineer, software";

  const imageLink: string = imageRef.includes("https://judsonjames.com")
    ? imageRef : `https://judsonjames.com${imageRef}`;

  const jsonLD = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Judson James",
      "url": "https://www.judsonjames.com",
    },
  ];

  return (
    <Helmet>
      {/* Base HTML Meta Tags*/}
      <html lang={config.siteLanguage}/>
      <title>{title}</title>
      <meta name={"description"} content={description}/>
      <meta charSet={"utf-8"}/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
      <meta name="msapplication-tap-highlight" content="no"/>
      <meta name={"keywords"} content={tags ? `${tags}, ${baseKeyWords}` : baseKeyWords}/>

      {/* Google */}
      <meta itemProp={"name"} content={title}/>
      <meta itemProp={"description"} content={description}/>
      <meta itemProp={"image"} content={imageLink}/>

      {/* Facebook */}
      <meta property="og:url" content={config.siteUrl}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={imageLink}/>

      {/* Twitter */}
      <meta name="twitter:card" content={title}/>
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ""}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={imageLink}/>

      {/* Extra SEO Stuff*/}
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
    </Helmet>
  );
};

export default SEO;
