require("dotenv").config({
  path: `.env`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (!contentfulConfig.spaceId || !contentfulConfig.accessToken) {
  throw new Error("Contentful not configured correctly!");
}

module.exports = {
  siteMetadata: {
    name: `Judson James Personal Portfolio`,
    tagline: `Full Stack Software Engineer ready to take on any projects!`,
    siteUrl: `https://focused-lamarr-93f88f.netlify.com/`
  },  
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://focused-lamarr-93f88f.netlify.com/`,
        sitemap: `https://focused-lamarr-93f88f.netlify.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/'}]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 600,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      }
    }
  ],
};
