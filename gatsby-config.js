module.exports = {
  siteMetadata: {
    name: `Judson James Personal Portfolio`,
    tagline: `Full Stack Software Engineer ready to take on any projects!`,
    siteUrl: `https://judsonjames.dev`
  },  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://judsonjames.dev`,
        sitemap: `https://judsonjames.dev/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/'}]
      }
    }
  ],
};
