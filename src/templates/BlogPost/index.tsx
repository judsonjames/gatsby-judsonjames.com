import { graphql } from "gatsby";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import { IPageProps } from "../../globals";
import "./styles.scss";

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug}) {
            title
            publishDate(formatString: "MMMM Do, YYYY")
        }
    }
`;

const BlogPost = (props: IPageProps): JSX.Element => {
  const { contentfulBlogPost } = props.data;
  return (
    <SiteLayout
      title={"blog post"}
      description={""}
      imageRef={""}
    >
      <div>
        <h1>
          {contentfulBlogPost.title}
        </h1>
        <p>
          {contentfulBlogPost.publishDate}
        </p>
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
