import React from "react";
import "./styles.scss";

const AboutSection = (): JSX.Element => {
  return (
    <div className={"home__about-section"}>
      <div className={"about__inner-div"}>
        <h1 id={"about"}>About</h1>
        <p>
          I'm a Software Developer mostly experienced in JavaScript/TypeScript and Python applications ranging
          from web apps, REST APIs, API management, and general website design.
        </p>
        <p>
          I'm currently employed by 52inc, a company that works with others both large and small to get
          software projects up and going quickly and efficiently. My role is Software Developer, focusing on
          a mix of web and server applications. I also accept freelance work on a case-by-case basis, if
          you're interested in working together, you can contact me.
        </p>
        <p>
          Some examples of my past work include:
        </p>
        <ul>
          <li>React Apps</li>
          <li>Next.js Server-Rendered Apps</li>
          <li>Gatsby.js Static Sites</li>
          <li>Static Sites, REST APIs, and other operations with Django</li>
          <li>REST APIs written with Hug, powered by SQLAlchemy and Marshmallow</li>
          <li>Containerized software written and managed with Docker; hosted by various platforms</li>
          <li>Server-less web and mobile applications powered by Firebase</li>
          <li>2D and 3D game development with Unity, Unreal, and other game engines</li>
          <li>Robotics engineering and design, both in the hardware and software architectures</li>
        </ul>
        <p>
          Technology is constantly evolving, and every technical challenge has different needs, so knowing
          a variety of software makes for an overall better product. Lately I've been working to learn more
          with Rust, as I enjoy working with lower-level languages such as C/C++ and can apply Rust to the
          same kind of projects listed above, but can expand to other possibilities as well.
        </p>
        <p>
          When I'm not working on software projects, I can be found streaming on Twitch, discussing software
          with friends over Discord, and tinkering with the most optimal hardware solutions for
          myself and my girlfriend.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
