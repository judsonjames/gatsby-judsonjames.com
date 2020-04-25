import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SiteLayout from "../../components/SiteLayout";
import {EducationItem, OpenSourceItem, WorkItem} from "../../components/TimelineHelpers";

/**
 * Gatsby Page Constructor used to represent the "/work" extension
 * @constructor
 */
const Work = (): JSX.Element => {
    return (
        <SiteLayout
            title={"Judson James | Work"}
            description={""}
            imageRef={"/img/profile_pic"}
            hideFooter={true}
        >
            <VerticalTimeline>
                <OpenSourceItem
                    title={"Programming Mentor"}
                    subtitle={"FIRST Robotics Competition (FRC) Team 4451"}
                    description={
                        "I volunteer my Saturdays to help high school students learn about the design and " +
                        "development of robots by teaching them about software design, algorithms, and electronics " +
                        "integrations. FIRST was what helped guide me to pursue computing as a career, so this is my " +
                        "way of giving back to the community."
                    }
                    dates={"January 2020 - Present"}
                />
                <WorkItem
                    title={"Software Developer"}
                    subtitle={"52inc"}
                    dates={"July 2019 - Present"}
                    description={"ReactJS, NextJS, GatsbyJS, Hug, Databases, Visual Design"}
                />
                <EducationItem
                    title={"University of South Carolina"}
                    subtitle={"Graduated with Leadership Distinction"}
                    dates={"May 2019"}
                    description={"Bachelor's of Science and Engineering in Computer Engineering"}
                />
                <WorkItem
                    title={"Software Developer"}
                    subtitle={"Center for Digital Humanities, Southern Studies"}
                    description={""}
                    dates={"December 2018 - June 2019"}
                />
                <WorkItem
                    title={"Software/Hardware Engineering Jr. Developer"}
                    subtitle={"Van Robotics"}
                    description={"Robotics Development, Django, jQuery, AJAX, Docker, Nginx"}
                    dates={"April 2018 - November 2018"}
                />
                <WorkItem
                    title={"Supplemental Instructor"}
                    subtitle={"University of South Carolina Student Success Center"}
                    description={"Provided additional instruction/study sessions for students with " +
                        "plans constructed by myself. Sessions would be provided three times per week, and would" +
                        "cover material lectured that week as well as real-world examples of concepts."}
                    dates={"August 2016 - May 2019"}
                />
                <EducationItem
                    title={"University of South Carolina"}
                    subtitle={"Started Computer Engineering Degree Program"}
                    description={""}
                    dates={"August 2015"}
                />
            </VerticalTimeline>
        </SiteLayout>
    );
};

export default Work;
