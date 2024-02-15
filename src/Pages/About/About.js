import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

// Import icons for different languages
import {
  BiLogoAngular,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFlutter,
} from "react-icons/bi";
import { SiTailwindcss, SiExpress, SiDocker, SiSwagger, SiGit } from "react-icons/si";
import { FaAndroid, FaApple } from "react-icons/fa";
import { DiLinux, DiApple } from "react-icons/di";

const About = ({ selectedLanguage }) => {
  // Define translations for different languages
  const translations = {
    en: {
      aboutHeading: "About me",
      aboutText: `👋 Hi there! I'm Makrem, a software development engineer with a passion for crafting innovative solutions using the latest technologies. With expertise in Full Stack development, I excel in creating dynamic and user-friendly applications for both mobile and web platforms.

💻 My proficiency spans across a range of technologies including Flutter, Dart, Angular, Node.js, MongoDB, and more. Whether it's building intuitive user interfaces or architecting robust backend systems, I thrive on tackling complex challenges and delivering impactful solutions.

🚀 From my experience collaborating on projects in various domains like healthcare and logistics, I've honed my skills in understanding domain-specific requirements and translating them into scalable software solutions.

🌐 I'm eager to continue my journey in the tech world, constantly learning and adapting to new technologies to stay ahead of the curve. Let's connect and explore opportunities to create something extraordinary together!`,
      stuffIKnow: "Stuff I know:",
    },
    de: {
      aboutHeading: "Über mich",
      aboutText: `👋 Hallo! Ich bin Makrem, ein Softwareentwicklungsingenieur mit einer Leidenschaft für die Entwicklung innovativer Lösungen mit den neuesten Technologien. Mit Expertise in der Full Stack-Entwicklung bin ich darin spezialisiert, dynamische und benutzerfreundliche Anwendungen für mobile und Web-Plattformen zu erstellen.

💻 Meine Kenntnisse umfassen eine Vielzahl von Technologien, darunter Flutter, Dart, Angular, Node.js, MongoDB und mehr. Egal, ob es darum geht, intuitive Benutzeroberflächen zu erstellen oder robuste Backend-Systeme zu entwerfen, ich blühe auf, komplexe Herausforderungen anzugehen und wirkungsvolle Lösungen zu liefern.

🚀 Aus meiner Erfahrung in der Zusammenarbeit an Projekten in verschiedenen Bereichen wie Gesundheitswesen und Logistik habe ich meine Fähigkeiten verbessert, domänenspezifische Anforderungen zu verstehen und in skalierbare Softwarelösungen umzusetzen.

🌐 Ich bin bestrebt, meine Reise in der Tech-Welt fortzusetzen, ständig zu lernen und mich an neue Technologien anzupassen, um stets einen Schritt voraus zu sein. Lass uns verbinden und Möglichkeiten erkunden, zusammen etwas Außergewöhnliches zu schaffen!`,
      stuffIKnow: "Dinge, die ich kenne:",
    },
    fr: {
      aboutHeading: "À propos de moi",
      aboutText: `👋 Bonjour ! Je suis Makrem, un ingénieur en développement logiciel passionné par la création de solutions innovantes à l'aide des dernières technologies. Avec une expertise en développement Full Stack, j'excelle dans la création d'applications dynamiques et conviviales pour les plateformes mobiles et Web.

💻 Ma maîtrise s'étend sur un éventail de technologies, y compris Flutter, Dart, Angular, Node.js, MongoDB, et plus encore. Que ce soit pour créer des interfaces utilisateur intuitives ou concevoir des systèmes backend robustes, j'aime relever les défis complexes et proposer des solutions impactantes.

🚀 Fort de mon expérience de collaboration sur des projets dans divers domaines tels que la santé et la logistique, j'ai perfectionné mes compétences pour comprendre les exigences spécifiques au domaine et les traduire en solutions logicielles évolutives.

🌐 Je suis impatient de poursuivre mon parcours dans le monde de la technologie, en apprenant constamment et en m'adaptant aux nouvelles technologies pour rester en avance sur la courbe. Connectons-nous et explorons les opportunités de créer quelque chose d'extraordinaire ensemble !`,
      stuffIKnow: "Ce que je sais :",
    },
    // Add translations for other languages here
  };

  // If selectedLanguage is not provided, default to English
  const language = selectedLanguage || "en";

  return (
    <>
      <Heading Heading={translations[language].aboutHeading} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>{translations[language].aboutText}</motion.p>
        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>{translations[language].stuffIKnow}</h2>
          <div className="icons">
            <BiLogoAngular style={{ color: "#dd0031" }} /> {/* Angular */}
            <BiLogoHtml5 style={{ color: "#e34f26" }} /> {/* HTML5 */}
            <BiLogoCss3 style={{ color: "#264de4" }} /> {/* CSS3 */}
            <BiLogoJavascript style={{ color: "#f7df1e" }} /> {/* JavaScript */}
            <BiLogoNodejs style={{ color: "#3c873a" }} /> {/* Node.js */}
            <BiLogoMongodb style={{ color: "#4db33d" }} /> {/* MongoDB */}
            <BiLogoFlutter style={{ color: "#02569b" }} /> {/* Flutter */}
            <FaAndroid style={{ color: "#a4c639" }} /> {/* Android */}
            <DiApple style={{ color: "#a8b5b8" }} /> {/* MacOS */}
            <SiDocker style={{ color: "#0db7ed" }} /> {/* Docker */}
            <SiSwagger style={{ color: "#85ea2d" }} /> {/* Swagger */}
            <SiGit style={{ color: "#f05032" }} /> {/* Git */}
            <DiLinux style={{ color: "#f5c71a" }} /> {/* Linux */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
