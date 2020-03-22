import React from "react";
import SiteLayout from "../../components/SiteLayout";

const Blog = (): JSX.Element => {
    return (
        <SiteLayout
            title={"Judson James | Blog"}
            description={"The coolest blog you'll ever get to read"}
        >
            <div>
                Blog Page
            </div>
        </SiteLayout>
    );
};

export default Blog;
