import { graphql } from "gatsby";
import React, { ComponentType } from "react";
import BlogEntry from "../../components/BlogEntry";
import SiteLayout from "../../components/SiteLayout";
import { IPageProps } from "../../globals";
import "./styles.scss";

export const query = graphql`
  query BlogIndexQuery {
      allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
              node {
                  publishDate(formatString: "MMMM Do, YYYY")
                  slug
                  tags
                  title
                  description {
                    description
                  }
              }
          }
      }
  }
`;

/**
 * Some notes about the Blog Page
 *  - Because of the way that my Graph is working, Contentful serves the Blog Post description
 *    as an object, with the prop named the same as the parent. It's weird but that's how it be sometimes.
 * @param { IPageProps } props
 * @constructor
 */
const Blog: ComponentType<IPageProps> = (props: IPageProps): JSX.Element => {
  const { edges } = props.data.allContentfulBlogPost;
  return (
    <SiteLayout
      title={"Judson James | Blog"}
      description={"An Educational Blog describing my experiences as a developer, and help others learn."}
      imageRef={"/img/profile_pic.jpg"}
    >
      <div id={"BlogEntriesList"}>
        {edges.map(({ node }, i: number) => (
          <BlogEntry
            key={`${node.title}-${i}`}
            description={node.description.description}
            published={node.publishDate}
            slug={`/blog/${node.slug}`}
            tags={node.tags}
            title={node.title}
          />
        ))}
      </div>
    </SiteLayout>
  );
};

export default Blog;
