import React from "react";
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
        hideHeader={true}
        hideFooter={true}
    >
        <div>
            <HomeHeader/>
        </div>
    </SiteLayout>
  );
};

export default IndexPage;
