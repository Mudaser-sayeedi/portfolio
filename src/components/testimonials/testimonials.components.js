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
      name: "Tina Snow",
      review:
        "Velit in veniam cillum elit irure. Cillum eu pariatur ullamco id commodo commodo aliquip. Sit consectetur exercitation cillum consectetur nulla aliqua voluptate. Est commodo anim ipsum aute sunt nisi. Amet ex in nisi proident sit ut officia sint. Culpa do ad in culpa commodo aute.",
    },
    {
      avatar: AVATAR2,
      name: "Shatta Wale",
      review:
        "Velit in veniam cillum elit irure. Cillum eu pariatur ullamco id commodo commodo aliquip. Sit consectetur exercitation cillum consectetur nulla aliqua voluptate. Est commodo anim ipsum aute sunt nisi. Amet ex in nisi proident sit ut officia sint. Culpa do ad in culpa commodo aute.",
    },
    {
      avatar: AVATAR3,
      name: "Kwame Despite",
      review:
        "Velit in veniam cillum elit irure. Cillum eu pariatur ullamco id commodo commodo aliquip. Sit consectetur exercitation cillum consectetur nulla aliqua voluptate. Est commodo anim ipsum aute sunt nisi. Amet ex in nisi proident sit ut officia sint. Culpa do ad in culpa commodo aute.",
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
