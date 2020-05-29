import React from "react";
import AboutSection from "../components/AboutSection";
import HomeHeader from "../components/HomeHeader";
import SiteLayout from "../components/SiteLayout";

//
// interface IndexPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         name: string;
//         tagline: string;
//       },
//     },
//   };
// }
//
// export const indexPageQuery = graphql`
//   query IndexPageQuery {
//     site {
//       siteMetadata {
//         name
//         tagline
//       }
//     }
//   }
// `;

const IndexPage = (): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James | Home"}
      description={"A Full Stack Developer who loves to work with new and interesting projects."}
      imageRef={"/img/profile_pic.jpg"}
      hideHeader={false}
      hideFooter={true}
    >
      <HomeHeader/>
    </SiteLayout>
  );
};

export default IndexPage;
