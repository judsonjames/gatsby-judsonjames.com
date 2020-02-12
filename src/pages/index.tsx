import React from "react";
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
    <SiteLayout>
        <div>
            Hi there, I'm Judson
        </div>
    </SiteLayout>
  );
};

export default IndexPage;
