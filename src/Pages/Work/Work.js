import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/Data.json";
import Heading from "../../Components/Heading/Heading";
import { LoadMore } from "../../Components/Loader/Loader";
import { motion } from "framer-motion";

import { BiLogoAngular, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoFlutter } from 'react-icons/bi';
import { SiTailwindcss, SiExpress, SiDocker, SiSwagger, SiGit } from 'react-icons/si';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { DiLinux, DiApple } from 'react-icons/di';
import { animations } from "../../Styles/Animations/Animations";

const Work = ({ selectedLanguage }) => {
  const [projects, setProjects] = useState(Data.slice(0, 5));
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleShowAllProjects = () => {
    setProjects(Data);
    setShowAllProjects(true);
    setDisplay(null);
  };

  const filterProjectsBySkill = (skill) => {
    setProjects((prevProjects) =>
      Data.filter((project) => project.tech_Stack.includes(skill))
    );
  };

  const translations = {
    en: {
      heading: "My Work",
      showMore: "Show More"
    },
    de: {
      heading: "Meine Arbeit",
      showMore: "Mehr anzeigen"
    },
    fr: {
      heading: "Mon travail",
      showMore: "Voir plus"
    }
  };

  return (
    <div className="work">
      <Heading Heading={translations[selectedLanguage].heading} />
      <motion.div
        className="icons"
        {...animations.bar}
        style={{
          fontSize: "3rem",
          justifyContent: "center",
          marginBottom: "2rem",
          display: display,
        }}
      >
        <BiLogoAngular
          style={{ color: "#dd0031", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("angular")}
        />
          <BiLogoHtml5
        style={{ color: "#e34f26", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("html5")}
      />
      <BiLogoCss3
        style={{ color: "#264de4", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("css3")}
      />
      <BiLogoJavascript
        style={{ color: "#f7df1e", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("javascript")}
      />
      <BiLogoNodejs
        style={{ color: "#3c873a", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("node.js")}
      />
      <BiLogoMongodb
        style={{ color: "#4db33d", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("mongodb")}
      />
      <BiLogoFlutter
        style={{ color: "#02569b", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("flutter")}
      />
      <FaAndroid
        style={{ color: "#a4c639", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("android")}
      />
      <DiApple
        style={{ color: "#a8b5b8", cursor: "pointer" }}
        onClick={() => filterProjectsBySkill("ios")}
      />
        {/* Add other icons with onClick handlers */}
      </motion.div>
      <div className="cards">
        {projects.map((value) => (
          <Card
            key={value.id}
            heading={value.heading}
            url={value.link}
            image={value.img}
            github={value.github}
          />
        ))}
        {!showAllProjects && (
          <LoadMore
            image={Data[5].img}
            heading={translations[selectedLanguage].showMore}
            onClick={handleShowAllProjects}
            // You can customize the appearance of the "Show More" card
          />
        )}
      </div>
    </div>
  );
};

export default Work;
