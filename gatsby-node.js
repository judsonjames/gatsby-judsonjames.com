const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.warn(result.errors);
          reject(result.errors);
        }
        
        result.data.allContentfulBlogPost.edges.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: path.resolve("./src/templates/BlogPost/index.tsx"),
            context: {
              slug: post.node.slug
            }
          })
        })
      })
    )
  })
};
