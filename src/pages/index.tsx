import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SiteLayout from "../components/SiteLayout";
import { IPageProps } from "../globals";
import "./styles.scss";

export const query = graphql`
    query ProfilePictureQuery {
        file(relativePath: {eq: "profile_pic_new.png"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const IndexPage = (props: IPageProps): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James"}
      description={"A Full Stack Developer who loves to work with new and interesting projects."}
      imageRef={"/img/profile_pic_new.png"}
      hideFooter={true}
    >
      <div id={"HomeHeader"}>
        <div>
          <Img fluid={props.data.file.childImageSharp.fluid} className={"home-header__profile-pic"}/>
          <h1 className={"home-header__name"}>Judson James</h1>
          <h3 className={"home-header__title"}>Full Stack Engineer</h3>
          <div className={"home-header__buttons"}>
            <a href={"/docs/JudsonJames-Resume.pdf"} target={"_blank"} rel={"noreferrer noopener"}>
              <div>
                <span>Resume</span>
              </div>
            </a>
            <a href={"https://github.com/judsonjames"} target={"_blank"} rel={"noreferrer noopener"}>
              <div>
                <span>GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default IndexPage;
