import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SiteLayout from "../../components/SiteLayout";
import {EducationItem, OpenSourceItem, WorkItem} from "../../components/TimelineHelpers";
import "./styles.scss";

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
            <div className={"timeline__container"}>
                <VerticalTimeline className={"timeline__component"}>
                    <OpenSourceItem
                        title={"Programming Mentor"}
                        subtitle={"FIRST Robotics Competition (FRC) Team 4451"}
                        description={
                            "I volunteer my Saturdays to help high school students learn about the design and " +
                            "development of robots by teaching them about software design, algorithms, and " +
                            "electronics integrations. FIRST was what helped guide me to pursue computing as a " +
                            "career, so this is my way of giving back to the community."
                        }
                        dates={"January 2020 - Present"}
                        tags={["Mentoring", "Java", "Electronics", "Robotics", "Volunteering", "Competition"]}
                    />
                    <WorkItem
                        title={"Software Developer"}
                        subtitle={"52inc"}
                        dates={"July 2019 - Present"}
                        description={
                            "Full Stack Developer working with various tech stacks to develop the right application " +
                            "for the right situation. Involves client interaction, quoting, and deciding what tech " +
                            "will work best for the project. As a result, the range of technology used is expansive."
                        }
                        tags={[
                            "React.js", "Gatsby.js", "AWS", "Hug", "TypeScript", "Google Docs API", "Python", "HIPAA",
                            "Docker", "MaterialUI", "ElementUI", "MSWord API", "Django", "Vue.js", "Next.js",
                            "Bootstrap",
                        ]}
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
                        description={"Worked on now unavailable web and server applications using " +
                            "Django as a server framework/static site server, and React with SSR through Django."}
                        dates={"December 2018 - June 2019"}
                        tags={[
                            "Django", "Docker", "Nginx", "Postgres", "AWS", "jQuery", "AJAX", "React.js", "Bootstrap",
                        ]}
                    />
                    <EducationItem
                        title={"OverLap Calendar App"}
                        subtitle={"Senior Computing Capstone"}
                        description={"Senior Capstone project that consisted of an Angular frontend and Django " +
                            "backend that would utilize consumers Google Calendars and find optimal meeting times " +
                            "between meeting participants."}
                        dates={"September 2018 - May 2019"}
                        tags={[
                            "Django", "Angular", "Postgres", "Python", "JavaScript", "Docker", "Nginx", "DigitalOcean",
                            "Google Calendar API", "OAuth", "Bootstrap",
                        ]}
                    />
                    <WorkItem
                        title={"Software/Hardware Engineering Jr. Developer"}
                        subtitle={"Van Robotics"}
                        description={"Developed Robotic Operations Software and Hardware for an educational robot " +
                            "that would give children a more immersive learning experience. Used C/C++ for drivers, " +
                            "Python for Web Server."}
                        dates={"April 2018 - November 2018"}
                        tags={[
                            "Python", "JavaScript", "AJAX", "Docker", "Nginx", "Django", "Robotics",
                            "Server", "C/C++", "DigitalOcean",
                        ]}
                    />
                    <EducationItem
                        title={"The Ward One Project"}
                        subtitle={"Critical Interactives"}
                        description={"Worked with Computer Science and Media Arts students to develop an app that " +
                            "provided a historical map of the Ward One Community of Columbia, SC. It provides " +
                            "historical context on the lives of people who lived in the community before the " +
                            "University acquired the communities' land."}
                        dates={"January 2018 - June 2018"}
                        tags={[
                            "Python", "Django", "iOS", "Server Integration", "Docker", "DigitalOcean", "MySQL", "PHP",
                        ]}
                    />
                    <EducationItem
                        title={"Magellan Scholar"}
                        subtitle={"Developing an Application to Teach Music through Games"}
                        description={"Through the Magellan Scholarship, I was able to develop an iPad application " +
                            "with Unity, with plans to expand to Android tablets, that would help monitor the " +
                            "audiation of a three year old to better develop their musical understanding later in " +
                            "life."}
                        dates={"May 2017 - May 2018"}
                        tags={[
                            "Unity", "iOS", "Postgres", "C#", ".NET",
                        ]}
                    />
                    <WorkItem
                        title={"Supplemental Instructor"}
                        subtitle={"University of South Carolina Student Success Center"}
                        description={"Provided additional instruction/study sessions for students with " +
                            "plans constructed by myself. Sessions would be provided three times per week, and would" +
                            "cover material lectured that week as well as real-world examples of concepts."}
                        dates={"August 2016 - May 2019"}
                        tags={[
                            "Java", "C++", "QT", "Python", "Leadership", "JavaScript", "HTML/CSS", "VisualBasic",
                        ]}
                    />
                    <EducationItem
                        title={"University of South Carolina"}
                        subtitle={"Started Computer Engineering Degree Program"}
                        description={""}
                        dates={"August 2015"}
                    />
                </VerticalTimeline>
            </div>
        </SiteLayout>
    );
};

export default Work;
