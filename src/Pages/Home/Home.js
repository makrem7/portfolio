import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import sanji from "../../Assets/Images/mee.jpg";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";

const Home = ({ selectedLanguage }) => {
  const translations = {
    en: {
      greeting: "Hi, I am",
      name: "Makrem Ltifi",
      profession: "A Full Stack Developer",
      contactMessage: "If you'd like to collaborate or have any questions, feel free to reach out to me. I'm excited to connect with you!"
    },
    de: {
      greeting: "Hallo, ich bin",
      name: "Makrem Ltifi",
      profession: "Ein Full Stack Entwickler",
      contactMessage: "Wenn Sie zusammenarbeiten möchten oder Fragen haben, zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, mich mit Ihnen zu verbinden!"
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Makrem Ltifi",
      profession: "Un développeur Full Stack",
      contactMessage: "Si vous souhaitez collaborer ou avez des questions, n'hésitez pas à me contacter. Je suis impatient de me connecter avec vous!"
    }
  };

  return (
    <>
      <div className="home">
        <div className="info-section">
          <motion.h1 {...animations.h1}>
            {translations[selectedLanguage].greeting},<br />
            {translations[selectedLanguage].name}
          </motion.h1>
          <motion.h3 {...animations.fade}>{translations[selectedLanguage].profession}</motion.h3>
          <motion.p {...animations.fade}>
            {translations[selectedLanguage].contactMessage}
          </motion.p>
          <Socials />
        </div>
        <div className="image-section">
          <img src={sanji} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
