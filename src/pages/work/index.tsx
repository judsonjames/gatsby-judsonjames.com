import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SiteLayout from "../../components/SiteLayout";
import {
  EducationItem,
  OpenSourceItem,
  WorkItem,
} from "../../components/TimelineHelpers";
import "./styles.scss";

/**
 * Gatsby Page Constructor used to represent the "/work" extension
 * @constructor
 */
const Work = (): JSX.Element => {
  return (
    <SiteLayout
      title={"Judson James | Work"}
      description={
        "A Timeline of my Work History, as well as a description of what I use in my work."
      }
      imageRef={"/img/profile_pic_new.png"}>
      <div className={"work-page"}>
        <div className={"work-page__description"}>
          Below is a timeline of my major volunteer projects, jobs, and
          educational landmarks. Many more projects are available on my GitHub,
          but to help you get a synopsis of my work experience, the highlights
          of the timeline are:
          <ul>
            <li>I am currently a Contract Software Engineer at Pavcon LLC</li>
            <li>
              I began my career in software engineering in 2017, while in
              college
            </li>
            <li>
              I graduated from the University of South Carolina in May, 2019
            </li>
            <li>
              My main software languages are JavaScript/TypeScript, Python, Go,
              and Rust
            </li>
            <li>
              My tech stack ranges depending on the project and what needs to be
              done
            </li>
            <li>
              Many of my side projects are open sourced on GitHub. If you want
              to inquire about work-related projects, please contact me
              directly.
            </li>
          </ul>
        </div>
        <VerticalTimeline className={"timeline__component"}>
          <WorkItem
            title={"Software Engineer"}
            subtitle={"Pavcon LLC"}
            dates={"November 2020 - Present"}
            description={
              "Government Contracting work on several projects across the Full Stack. " +
              "Projects are rapidly developed, so communication and organization is key. " +
              "Many of my projects include but are not limited to Angular SPA Frontends, " +
              "Django REST Framework Backends with Lambda functions," +
              "Fully Serverless backends, " +
              "Load and Security testing, and Data Pipelines involving complex and intense data."
            }
            tags={[
              "Angular",
              "TypeScript",
              "Python",
              "Django",
              "Government Contracting",
              "Postgres",
              "AWS",
              "Serverless",
              "Node.js",
              "Dynamo",
              "Cognito",
              "Athena",
              "Data Science",
              "K6",
              "AppSec",
            ]}
          />
          <WorkItem
            title={"Software Engineer"}
            subtitle={"Trapp Technology"}
            dates={"September 2020 - November 2020"}
            description={
              "Full Stack Engineer focusing on secure applications that utilize React frontends and Go backends"
            }
            tags={["React.js", "TypeScript", "Python", "HIPAA", "Go", "Mongo"]}
          />
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
            tags={[
              "Mentoring",
              "Java",
              "Electronics",
              "Robotics",
              "Volunteering",
              "Competition",
            ]}
          />
          <WorkItem
            title={"Software Developer"}
            subtitle={"52inc"}
            dates={"July 2019 - July 2020"}
            description={
              "Full Stack Developer working with various tech stacks to develop the right application " +
              "for the right situation. Involves client interaction, quoting, and deciding what tech " +
              "will work best for the project. As a result, the range of technology used is expansive."
            }
            tags={[
              "React.js",
              "Gatsby.js",
              "AWS",
              "Hug",
              "TypeScript",
              "Google Docs API",
              "Python",
              "HIPAA",
              "Docker",
              "MaterialUI",
              "ElementUI",
              "MSWord API",
              "Django",
              "Vue.js",
              "Next.js",
              "Bootstrap",
            ]}
          />
          <EducationItem
            title={"University of South Carolina"}
            subtitle={"Graduated with Leadership Distinction"}
            dates={"May 2019"}
            description={
              "Bachelor's of Science and Engineering in Computer Engineering"
            }
          />
          <WorkItem
            title={"Software Developer"}
            subtitle={"Center for Digital Humanities, Southern Studies"}
            description={
              "Worked on now unavailable web and server applications using " +
              "Django as a server framework/static site server, and React with SSR through Django."
            }
            dates={"December 2018 - June 2019"}
            tags={[
              "Django",
              "Docker",
              "Nginx",
              "Postgres",
              "AWS",
              "jQuery",
              "AJAX",
              "React.js",
              "Bootstrap",
            ]}
          />
          <EducationItem
            title={"OverLap Calendar App"}
            subtitle={"Senior Computing Capstone"}
            description={
              "Senior Capstone project that consisted of an Angular frontend and Django " +
              "backend that would utilize consumers Google Calendars and find optimal meeting times " +
              "between meeting participants."
            }
            dates={"September 2018 - May 2019"}
            tags={[
              "Django",
              "Angular",
              "Postgres",
              "Python",
              "JavaScript",
              "Docker",
              "Nginx",
              "DigitalOcean",
              "Google Calendar API",
              "OAuth",
              "Bootstrap",
            ]}
          />
          <WorkItem
            title={"Software/Hardware Engineering Jr. Developer"}
            subtitle={"Van Robotics"}
            description={
              "Developed Robotic Operations Software and Hardware for an educational robot " +
              "that would give children a more immersive learning experience. Used C/C++ for drivers, " +
              "Python for Web Server."
            }
            dates={"April 2018 - November 2018"}
            tags={[
              "Python",
              "JavaScript",
              "AJAX",
              "Docker",
              "Nginx",
              "Django",
              "Robotics",
              "Server",
              "C/C++",
              "DigitalOcean",
            ]}
          />
          <EducationItem
            title={"The Ward One Project"}
            subtitle={"Critical Interactives"}
            description={
              "Worked with Computer Science and Media Arts students to develop an app that " +
              "provided a historical map of the Ward One Community of Columbia, SC. It provides " +
              "historical context on the lives of people who lived in the community before the " +
              "University acquired the communities' land."
            }
            dates={"January 2018 - June 2018"}
            tags={[
              "Python",
              "Django",
              "iOS",
              "Server Integration",
              "Docker",
              "DigitalOcean",
              "MySQL",
              "PHP",
            ]}
          />
          <EducationItem
            title={"Magellan Scholar"}
            subtitle={"Developing an Application to Teach Music through Games"}
            description={
              "Through the Magellan Scholarship, I was able to develop an iPad application " +
              "with Unity, with plans to expand to Android tablets, that would help monitor the " +
              "audiation of a three year old to better develop their musical understanding later in " +
              "life."
            }
            dates={"May 2017 - May 2018"}
            tags={["Unity", "iOS", "Postgres", "C#", ".NET"]}
          />
          <WorkItem
            title={"Supplemental Instructor"}
            subtitle={"University of South Carolina Student Success Center"}
            description={
              "Provided additional instruction/study sessions for students with " +
              "plans constructed by myself. Sessions would be provided three times per week, and would" +
              "cover material lectured that week as well as real-world examples of concepts."
            }
            dates={"August 2016 - May 2019"}
            tags={[
              "Java",
              "C++",
              "QT",
              "Python",
              "Leadership",
              "JavaScript",
              "HTML/CSS",
              "VisualBasic",
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
