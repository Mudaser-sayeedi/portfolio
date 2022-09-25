import React, { useState } from "react";
import "./nav.components.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [activeNav,SetActiveNav]=useState('header')
  return (
    <nav>
      <a
        href="#header"
        className={activeNav === "header" ? "active" : ""}
        onClick={() => SetActiveNav("header")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? "active" : ""}
        onClick={() => SetActiveNav("about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => SetActiveNav("experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "services" ? "active" : ""}
        onClick={() => SetActiveNav("services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => SetActiveNav("contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
