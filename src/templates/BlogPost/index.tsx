import { graphql } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import SiteLayout from "../../components/SiteLayout";
import { IPageProps } from "../../globals";
import "./styles.scss";

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug}) {
            author {
                name
            }
            body {
                body
            }
            description {
                description
            }
            heroImage {
                fluid(resizingBehavior: SCALE) {
                    src
                }
            }
            publishDate(formatString: "MMMM Do, YYYY")
            title
        }
    }
`;

const BlogPost = (props: IPageProps): JSX.Element => {
  const { contentfulBlogPost: post } = props.data;
  return (
    <SiteLayout
      title={post.title}
      description={post.description.description}
      imageRef={post.heroImage.fluid.src}
    >
      <div id={"BlogPostContainer"}>
        <div className={"blog-post__body"}>
          <div className={"blog-post__meta"}>
            <h1>{post.title}</h1>
            <h3>{post.author.name}</h3>
            <p>{post.publishDate}</p>
            <img alt={"fluid-image"} src={post.heroImage.fluid.src}/>
          </div>
          <ReactMarkdown source={post.body.body} className={"blog-post__markdown"}/>
        </div>
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
