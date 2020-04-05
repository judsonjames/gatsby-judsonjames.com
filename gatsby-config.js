module.exports = {
  siteMetadata: {
    name: `Judson James Personal Portfolio`,
    tagline: `Full Stack Software Engineer ready to take on any projects!`,
    siteUrl: `https://focused-lamarr-93f88f.netlify.com/`
  },  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://focused-lamarr-93f88f.netlify.com/`,
        sitemap: `https://focused-lamarr-93f88f.netlify.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/'}]
      },
    },
  ],
};
