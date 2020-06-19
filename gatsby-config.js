require("dotenv").config({
  path: `.env.production`,
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
    siteUrl: `https://judsonjames.com`
  },  
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Judson James Professional Portfolio`,
        short_name: `Judson James`,
        start_url: `/`,
        background_color: `#4b90d2`,
        theme_color: `#d18c4b`,
        display: `standalone`,
        icon: "static/img/profile_pic_new.png",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://judsonjames.com`,
        sitemap: `https://judsonjames.com/sitemap.xml`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.judsonjames.com`,
      },
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
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["GETFORM_URL"]
      },
    },
  ],
};
