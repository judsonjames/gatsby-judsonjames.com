import React from "react";
import "./styles.scss";

const AboutSection = (): JSX.Element => {
  return (
    <div className={"home__about-section"}>
      <div className={"about__inner-div"}>
        <h3 id={"about"}>Who am I?</h3>
        <p>
          My name is Judson, and I'm a Full Stack Software Engineer specializing in Web Applications.
        </p>
        <h3 id={"stack"}>What stack do you use?</h3>
        <p>
          I don't marry myself to one end-all-be-all stack, but rather I want to constantly fill my software toolbox
          with tools that can build the most optimal solution. Sometimes it will need something fast as possible
          like Rust, but sometimes it needs to work with a wider developer community, like Python or JavaScript.
        </p>
        <h3 id={"prefer"}>Okay, what do you <i>prefer</i> to work with?</h3>
        <p>
          Most of my Frontend projects use ReactDOM and frameworks that use the ReactDOM like Create React App, Next,
          and Gatsby <a href={"https://github.com/judsonjames/gatsby-judsonjames.com"}>(like this site)</a>. Sometimes
          I'll dabble with Vue if the project is already using it.
        </p>
        <p>
          For backend, I'm experienced with both Monolithic frameworks like Django, but also more light-weight packages
          like Falcon, Hug for Python. For my Node backend projects I almost always use Express for CRUD apps and Apollo
          for GraphQL projects. I'm gradually shifting my side projects to use Rust more than Python or JS.
        </p>
        <h3 id={"robotics"}>But this is all Web Dev, your resume said you do Robotics as well?</h3>
        <p>
          You read that right. Before I did mostly Web projects, I was actively involved in building algorithms to be
          used in robotics and virtual simulations and games. I'm still actively involved in the FIRST Robotics
          Competition as a Mentor to help students learn more about computing and to give back.
        </p>
        <h3 id={"other"}>Enough about Software, what else do you like to do?</h3>
        <p>
          I'm a life-long gamer, which how I ended up in the software industry, so I play regularly. My girlfriend and
          I play JRPGS/casual games and stream on Twitch for fun.
        </p>
        <p>
          I also enjoy cooking, play with the latest tech, and I'm currently teaching myself Japanese.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
