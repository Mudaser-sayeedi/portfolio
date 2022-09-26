import React from "react";
import "./portfolio.components.scss";
import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.png";
import IMG6 from "../../assets/images/portfolio6.jpg";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Charts templates & infographics in Figma",
      github: "https://github.com",
      demo: "https://.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Figma dashboard UI kit for data design web apps",
      github: "https://github.com",
      demo: "https://.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "Maintaining tasks and tracking progress",
      github: "https://github.com",
      demo: "https://.com",
    },
    {
      id: 5,
      image: IMG5,
      title: "Charts templates & infographics in Figma",
      github: "https://github.com",
      demo: "https://.com",
    },
    {
      id: 6,
      image: IMG6,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
