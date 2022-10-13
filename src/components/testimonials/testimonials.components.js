import React from "react";
import "./testimonials.components.scss";
import AVATAR1 from '../../assets/images/avatar1.jpg';
import AVATAR2 from '../../assets/images/avatar2.jpg';
import AVATAR3 from '../../assets/images/avatar3.jpg';
import avatar4 from "../../assets/images/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


function Testimonials() {
  const data = [
    {
      avatar: AVATAR1,
      name: "Muhib Ur Rahman Niazi",
      review:
        "Since having our new website built by Mudaser Sayeedi, we have seen a 100% increase in the number of online contact forms being filled out and returned to us. Sayeedi and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Mudaser sayeedi for all of your hard work and support!",
    },
    {
      avatar: AVATAR2,
      name: "Alina Alami",
      review:
        "I have experienced one of the most talented, creative, friendly, lexible software engineer in my whole work life. Mr.Sayeedi caught quickly and exactly that I wanted, I have recieved more than what I had expected... words can not explain how unique the final result was, Most passionate to work with people, more productive and publishes hight quality softwares. It was such a pleasure to had the opportunity of working with Mr.Sayeedi."
    },
    {
      avatar: AVATAR3,
      name: "Esmat Rahmani",
      review:
        "Dear Mudaser Sayeedi I am pleased with your determination to finish this project, Your helpful attitude shows you are ready to take on new challenges and grow with the company. I'm excited to have another project with you. Good luck."
    },
    {
      avatar: avatar4,
      name: "Nana Ama McBrown",
      review:
        "Velit in veniam cillum elit irure. Cillum eu pariatur ullamco id commodo commodo aliquip. Sit consectetur exercitation cillum consectetur nulla aliqua voluptate. Est commodo anim ipsum aute sunt nisi. Amet ex in nisi proident sit ut officia sint. Culpa do ad in culpa commodo aute.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={40}
        modules={[Pagination]}
        className="mySwiper container testimonials_container"
      >
        {data.map(({ avatar, name, review }, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
