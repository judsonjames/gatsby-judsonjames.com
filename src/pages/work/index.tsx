import React from "react";
import SiteLayout from "../../components/SiteLayout";
import Technologies from "../../components/Technologies";

const Work = (): JSX.Element => {
    return (
        <SiteLayout
            title={"Judson James | Work"}
            description={""}
            imageRef={"/img/profile_pic"}
        >
            <div>
                <Technologies/>
            </div>
        </SiteLayout>
    );
};

export default Work;
