import React from "react";
import "./portfolio.components.scss";
import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.jpg";
import IMG6 from "../../assets/images/portfolio6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Quran Karim",
      github: "https://github.com/Mudaser-sayeedi/Qura-n-Karim",
      demo: "https://mudaser-sayeedi.github.io/Qura-n-Karim/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Joke Teller",
      github: "https://github.com/Mudaser-sayeedi/MS-Joke-Teller",
      demo: "https://mudaser-sayeedi.github.io/MS-Joke-Teller/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Gym Management System",
      github: "https://github.com/Mudaser-sayeedi/gym",
      demo: "https://mudaser-sayeedi.github.io/gym/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Spock Rock Game",
      github: "https://github.com/Mudaser-sayeedi/MS-Spock-Rock-Game",
      demo: "https://mudaser-sayeedi.github.io/MS-Spock-Rock-Game/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Audio Player",
      github: "https://github.com/Mudaser-sayeedi/MS-Audio-Player",
      demo: "https://mudaser-sayeedi.github.io/MS-Audio-Player/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Quote Generator",
      github: "https://github.com/Mudaser-sayeedi/MS-Quote-Generator",
      demo: "https://mudaser-sayeedi.github.io/MS-Quote-Generator/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper //it was a articale tag
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="container portfolio_container mySwiper"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            //it was a div
            <SwiperSlide className="portfolio_item" key={id}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Portfolio;
