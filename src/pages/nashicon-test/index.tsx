import React from "react";

const NashiconTest = (): JSX.Element => {
    const webPage: string = "https://nashicon.com/schedule/";
    const iosLink: string = "https://apps.apple.com/us/app/gather-events/id1062009959";
    const androidLink: string = "https://play.google.com/store/apps/details?id=com.growtix.gather&hl=en_US";

    const ua = navigator.userAgent.toLowerCase();
    const redirectURL: string = ua.indexOf("android") > -1
        ? androidLink
        : ua.indexOf("ios") > -1
            ? iosLink
            : webPage;
    window.location.replace(redirectURL);
    return (
        <div>
            Nashicon Test
        </div>
    );
};

export default NashiconTest;
