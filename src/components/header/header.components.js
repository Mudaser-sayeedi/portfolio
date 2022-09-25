import React from "react";
import CTA from "./cta.components";
import "./header.components.scss";
import ME from "../../assets/images/me.png";
import HeaderSocials from "./headerSocials.components";


function Header() {
  return (
    <header id="header">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Sayed Mudaser Sayeedi</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        
        <div className="me">
          <img src={ME} alt="MY Pic" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
