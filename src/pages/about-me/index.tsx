import React from "react";
import SiteLayout from "../../components/SiteLayout";
import "./styles.scss";

const AboutMe = (): JSX.Element => {
  return (
    <SiteLayout
      title={"About Me"}
      description={
        "A short, but informative section giving you an idea of who I am and what I do."
      }
      imageRef={"/img/profile_pic_new.png"}>
      <>
        <div className={"home__about-section"}>
          <div className={"about__inner-div"}>
            <h3 id={"about"}>Who are you?</h3>
            <p>
              My name is Judson, and I'm a Software Engineer specializing in
              Frontend, Backend, and DevOps.
            </p>
            <h3 id={"links"}>What links would you like to share?</h3>
            <li>
              <a
                href={"/docs/JudsonJames-Resume.pdf"}
                target={"_blank"}
                rel={"noreferrer noopener"}>
                My Resume
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/judsonjames"}
                target={"_blank"}
                rel={"noreferrer noopener"}>
                My GitHub
              </a>
            </li>
            <li>
              <a
                href={"https://www.linkedin.com/in/judson-james-a63844117/"}
                target={"_blank"}
                rel={"noreferrer noopener"}>
                My LinkedIn
              </a>
            </li>
            <li>
              You can also send a message on my <a href={"/contact"}>Contact</a>{" "}
              page
            </li>
            <h3 id={"stack"}>What stack do you use?</h3>
            <p>
              I don't marry myself to one end-all-be-all stack, but rather I
              want to constantly fill my software toolbox with tools that can
              build the most optimal solution. If I'm working with a team of
              developers, I will use what works best for the team. Otherwise, if
              I'm working solo, I will try to match the existing stack or build
              what will be the most stable down the line. Sometimes it will need
              something fast as possible like Rust, but sometimes it needs to
              work with a wider developer community, like Python or JavaScript.
            </p>
            <h3 id={"prefer"}>
              Okay, what do you <i>prefer</i> to work with?
            </h3>
            <p>
              Most of my Frontend projects use ReactDOM and frameworks that use
              the ReactDOM like Create React App, Next, and Gatsby{" "}
              <a href={"https://github.com/judsonjames/gatsby-judsonjames.com"}>
                (like this site)
              </a>
              . Sometimes I'll dabble with Vue if the project is already using
              it.
            </p>
            <p>Some Example solutions would be:</p>
            <li>Gatsby + Netlify + Contentful CMS</li>
            <li>Next + Netlify</li>
            <li>MERN/MEAN</li>
            <li>React + Python/Rust backend implementation + AWS/Heroku</li>
            <li>Angular + Django + AWS</li>
            <li>Vue.js + Django + AWS</li>
            <li>Angular + Serverless Node.js + AWS</li>
            <li>
              React + Apollo Engine with standalone GraphQL or including REST
              endpoints
            </li>
            <p>
              For backend, I'm experienced with both Monolithic frameworks like
              Django, but also more light-weight packages like Falcon, Hug for
              Python. For my Node backend projects I almost always use Express
              for CRUD apps and Apollo for GraphQL projects.
            </p>
            <p>
              I also use Serverless as part of my stack if I think there is a
              use case for it, or if a fully Serverless backend is what would
              work best for the project.
            </p>
            <p>
              I'm gradually shifting my side projects to use Rust more than
              Python or JS, but for enterprise level applications I use whatever
              is best for the team.
            </p>
            <h3 id={"robotics"}>
              But this is all Web Dev, your resume said you do Robotics as well?
            </h3>
            <p>
              You read that right. Before I did mostly Web projects, I was
              actively involved in building algorithms to be used in robotics
              and virtual simulations and games. I'm still actively involved in
              the FIRST Robotics Competition as a Mentor to help students learn
              more about computing and to give back.
            </p>
            <h3 id="game-design">You also do Game Design?</h3>
            <p>
              Yes! I've always found video games to be a relaxing passtime when
              I'm not actively working. It's actually how I started programming,
              all because I wanted to learn how to make my own Pokémon clone.
            </p>
            <p>
              When it comes to more modern and enterprise level game design, I
              use Unity and Unreal4 in my spare time to develop side projects
              with others. Thanks to my experience with Untiy, I've actually
              been able to learn more C# and .NET than any other application.
            </p>
            <h3 id={"other"}>
              Enough about Software, what else do you like to do?
            </h3>
            <p>
              I'm a life-long gamer, which how I ended up in the software
              industry, so I play regularly. My girlfriend and I play
              JRPGS/casual games and stream on Twitch for fun.
            </p>
            <p>
              I also enjoy cooking, playing with the latest tech, and I'm
              currently teaching myself Japanese.
            </p>
          </div>
        </div>
      </>
    </SiteLayout>
  );
};

export default AboutMe;
