import React from "react";
import AboutSection from "../components/AboutSection";
import HomeHeader from "../components/HomeHeader";
import MenuComponent from "../components/Menu";
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
        hideHeader={false}
        hideFooter={true}
    >
        <div>
            <HomeHeader/>
            <AboutSection/>
        </div>
    </SiteLayout>
  );
};

export default IndexPage;
