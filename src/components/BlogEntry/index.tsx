import { Link } from "gatsby";
import React, { ComponentType } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.scss";

interface IBlogEntryProps {
  description: string;
  published: string;
  slug: string;
  tags: string[];
  title: string;
}

const BlogTag = (props: { text: string, key: string }): JSX.Element => (
  <div className={"blog-tags__item"}>
    {props.text}
  </div>
);

const BlogEntry: ComponentType<IBlogEntryProps> = (props: IBlogEntryProps): JSX.Element => {
  return (
    <div className={"blog-entry"}>
      <h1>{props.title}</h1>
      <p className={"date-published"}>{props.published}</p>
      <ReactMarkdown source={props.description} className={"blog-markdown"}/>
      <div className={"view-container"}>
        <Link to={props.slug} className={"view-button__link"}>
          <div className={"view-button__container"}>
            <span>View</span>
          </div>
        </Link>
      </div>
      <div className={"blog-tags__container"}>
        {props.tags.map((tag: string, i: number) => (
          <BlogTag text={tag} key={`${props.title}-${i}`}/>
        ))}
      </div>
    </div>
  );
};

export default BlogEntry;
