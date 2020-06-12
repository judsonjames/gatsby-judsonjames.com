import React from "react";
import HomeHeader from "../components/HomeHeader";
import SiteLayout from "../components/SiteLayout";

const IndexPage = (): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James"}
      description={"A Full Stack Developer who loves to work with new and interesting projects."}
      imageRef={"/img/profile_pic.jpg"}
      hideFooter={true}
    >
      <HomeHeader/>
    </SiteLayout>
  );
};

export default IndexPage;
