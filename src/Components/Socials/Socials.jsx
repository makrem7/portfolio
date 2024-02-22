import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="icons">
      <a href="https://github.com/makrem7" target="_blank">
        <AiOutlineGithub style={{ color: "#4078c0" }} />
      </a>
      <a href="https://twitter.com/ltifi_makrem" target="_blank">
        <AiFillTwitterCircle style={{ color: "#26a7de" }} />
      </a>
      <a href="https://www.linkedin.com/in/makrem-ltifi" target="_blank">
        <AiFillLinkedin style={{ color: "#0072b1" }} />
      </a>
      <a href="mailto:makrem.mltifi@gmail.com" target="_blank">
        <AiOutlineMail style={{ color: "#db4437" }} />
      </a>
    </div>
  );
};

export default Socials;
