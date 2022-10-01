import React from "react";
import "./about.components.scss";
import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Wordwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            I am an experienced software developer. I bring more than three
            years’ experience writing JavaScript full-stack Web-Applications and
            Mobile-Applications. Spearheaded successful transition from LAMP
            stack to MERN stack which cut latency by 40% and increased
            effectiveness of Database administrators by 20%.
          </p>
          <p>
            I am a Full-Stack Developer who has a wide range of Front-End and
            Back-End skills, and extensive experience of using Object-Oriented
            languages. I really enjoy writing optimized Object-Oriented code and
            am very good at building and maintaining applications that support
            the solutions delivered to both internal and external customers. I
            always look to add my own magical touch to any new code that I
            write, and would like to mention that in the past I have worked
            alongside some very technically able individuals in the industry.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
