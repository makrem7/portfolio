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
import { SiDocker, SiSwagger, SiGit } from "react-icons/si";
import { FaAndroid, DiApple } from "react-icons/fa";
import { DiLinux } from "react-icons/di";

const About = ({ selectedLanguage }) => {
  // Define translations for different languages
  const translations = {
    en: {
      aboutHeading: "About me",
      aboutText: (
        <>
          <p>
            👋 Hello, I'm Makrem Ltifi.
          </p>
          <br></br>
          <p>
            🎓 I completed my preparatory cycle (math, physics, informatics) at Issat Mahdia, where I had the opportunity to work on various small projects like creating image editing tools and cool games like Wormy and Tetris. This experience sparked my passion for programming and motivated me to pursue further education. I then joined Enicarthage, where I graduated as a software engineer in 2022.
          </p>
          <br></br>
          <p>
            💻 My journey as a developer began with a focus on frontend development during my first final studies internship. I gained valuable experience working with Angular and honed my skills in creating interactive and user-friendly web applications. Soon after, I had the privilege of collaborating with a Saudi company as a mobile development freelancer. Together, we developed a mobile game called League Hunters 🎮, which was successfully published on Google Play and the App Store. It was a rewarding experience to contribute to my first real-world project and see it come to life.
          </p>
          <br></br>
          <p>
            🚀 Seeking to expand my skill set, I joined Amineware as a fullstack developer. During my time there, I collaborated closely with a talented team, gaining expertise in both frontend and backend technologies. One notable project involved contributing to the development and analysis of a mobile application tailored for delivery personnel working with a service provider for Amazon. This application empowered couriers to efficiently manage their work schedules, timings, and delivery details. This experience enhanced my skills in mobile and web development while providing insights into the complexities of creating user-friendly solutions.
          </p>
          <br></br>
          <p>
            🌟 Currently, I am working for Med'in Outlook as a Full Stack Developer. I have been contributing to the development and analysis of mobile and web applications in the medical domain. This includes a mobile application designed for healthcare professionals and a back-office administration application. My role involves collaborating with healthcare professionals to understand and integrate specific requirements of the medical field, as well as participating in ongoing maintenance and bug fixing activities.
          </p>
          <p>
          <br></br>
            🙏 Thank you for your time, and I appreciate any potential opportunities that may come my way.
          </p>
          <br></br>
        </>
      ),
      stuffIKnow: "Stuff I know:",
    },
    // Add translations for other languages here
    de: {
      aboutHeading: "Über mich",
      aboutText: (
        <>
          <p>
            👋 Hallo, ich bin Makrem Ltifi.
          </p>
          <br></br>
          <p>
            🎓 Ich habe meinen Vorbereitungszyklus (Mathematik, Physik, Informatik) an der Issat Mahdia abgeschlossen, wo ich die Möglichkeit hatte, an verschiedenen kleinen Projekten zu arbeiten, wie der Erstellung von Bildbearbeitungswerkzeugen und coolen Spielen wie Wormy und Tetris. Diese Erfahrung hat meine Leidenschaft für Programmierung entfacht und mich motiviert, meine Ausbildung weiter zu verfolgen. Anschließend trat ich Enicarthage bei, wo ich 2022 als Softwareingenieur graduierte.
          </p>
          <br></br>
          <p>
            💻 Meine Reise als Entwickler begann mit einem Schwerpunkt auf der Frontend-Entwicklung während meines ersten Abschlusspraktikums. Ich sammelte wertvolle Erfahrungen in der Arbeit mit Angular und verfeinerte meine Fähigkeiten in der Erstellung interaktiver und benutzerfreundlicher Webanwendungen. Kurz darauf hatte ich das Privileg, mit einem saudi-arabischen Unternehmen als Freelancer für die mobile Entwicklung zusammenzuarbeiten. Zusammen haben wir ein Mobile-Spiel namens League Hunters 🎮 entwickelt, das erfolgreich im Google Play Store und im App Store veröffentlicht wurde. Es war eine lohnende Erfahrung, zu meinem ersten realen Projekt beizutragen und zu sehen, wie es zum Leben erweckt wurde.
          </p>
          <br></br>
          <p>
            🚀 Auf der Suche nach einer Erweiterung meines Fähigkeitssatzes trat ich Amineware als Fullstack-Entwickler bei. Während meiner Zeit dort arbeitete ich eng mit einem talentierten Team zusammen und erwarb Expertise in Frontend- und Backend-Technologien. Ein bemerkenswertes Projekt umfasste die Entwicklung und Analyse einer mobilen Anwendung, die für Zustellpersonal konzipiert war, das mit einem Dienstleister für Amazon zusammenarbeitet. Diese Anwendung ermöglichte es Kurieren, ihre Arbeitszeiten, Zeitpläne und Lieferdetails effizient zu verwalten. Diese Erfahrung verbesserte meine Fähigkeiten in der mobilen und Web-Entwicklung und gab Einblicke in die Komplexitäten bei der Erstellung benutzerfreundlicher Lösungen.
          </p>
          <br></br>
          <p>
            🌟 Derzeit arbeite ich als Full Stack Developer für Med'in Outlook. Ich trage zur Entwicklung und Analyse von mobilen und Webanwendungen im medizinischen Bereich bei. Dazu gehört eine mobile Anwendung, die für medizinisches Fachpersonal entwickelt wurde, sowie eine Back-Office-Verwaltungsanwendung. Meine Aufgabe besteht darin, mit medizinischem Fachpersonal zusammenzuarbeiten, um spezifische Anforderungen des medizinischen Bereichs zu verstehen und zu integrieren, sowie an laufenden Wartungs- und Fehlerbehebungsaktivitäten teilzunehmen.
          </p>
          <br></br>
          <p>
            🙏 Vielen Dank für Ihre Zeit, ich schätze alle potenziellen Möglichkeiten, die sich mir bieten könnten.
          </p>
          <br></br>
        </>
      ),
      stuffIKnow: "Was ich weiß:",
    },
    fr: {
      aboutHeading: "À propos de moi",
      aboutText: (
        <>
          <p>
            👋 Bonjour, je suis Makrem Ltifi.
          </p>
          <br></br>
          <p>
            🎓 J'ai terminé mon cycle préparatoire (mathématiques, physique, informatique) à Issat Mahdia, où j'ai eu l'occasion de travailler sur divers petits projets tels que la création d'outils de retouche d'image et de jeux sympas comme Wormy et Tetris. Cette expérience a suscité ma passion pour la programmation et m'a motivé à poursuivre mes études. J'ai ensuite rejoint Enicarthage, où j'ai obtenu mon diplôme d'ingénieur logiciel en 2022.
          </p>
          <br></br>
          <p>
            💻 Mon parcours en tant que développeur a commencé avec un accent sur le développement frontend lors de mon premier stage de fin d'études. J'ai acquis une précieuse expérience en travaillant avec Angular et j'ai perfectionné mes compétences dans la création d'applications web interactives et conviviales. Peu de temps après, j'ai eu le privilège de collaborer avec une entreprise saoudienne en tant que freelance en développement mobile. Ensemble, nous avons développé un jeu mobile appelé League Hunters 🎮, qui a été publié avec succès sur Google Play et l'App Store. Ce fut une expérience enrichissante de contribuer à mon premier projet concret et de le voir prendre vie.
          </p>
          <br></br>
          <p>
            🚀 Cherchant à élargir mes compétences, j'ai rejoint Amineware en tant que développeur fullstack. Pendant mon séjour là-bas, j'ai collaboré étroitement avec une équipe talentueuse, acquérant une expertise dans les technologies frontend et backend. Un projet notable consistait à contribuer au développement et à l'analyse d'une application mobile adaptée au personnel de livraison travaillant avec un fournisseur de services pour Amazon. Cette application permettait aux coursiers de gérer efficacement leurs horaires de travail, leurs horaires et les détails de livraison. Cette expérience a amélioré mes compétences en développement mobile et web tout en fournissant des idées sur les complexités de la création de solutions conviviales.
          </p>
          <br></br>
          <p>
            🌟 Actuellement, je travaille chez Med'in Outlook en tant que développeur Full Stack. J'ai contribué au développement et à l'analyse d'applications mobiles et web dans le domaine médical. Cela inclut une application mobile conçue pour les professionnels de la santé et une application d'administration en back-office. Mon rôle consiste à collaborer avec des professionnels de la santé pour comprendre et intégrer des exigences spécifiques du domaine médical, ainsi qu'à participer à des activités de maintenance et de correction de bogues en cours.
          </p>
          <br></br>
          <p>
            🙏 Merci pour votre temps, et j'apprécie toutes les opportunités potentielles qui pourraient se présenter à moi.
          </p>
          <br></br>
        </>
      ),
      stuffIKnow: "Ce que je sais:",
    },
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
        {/* Removed the skills section as it wasn't relevant to the provided content */}
      </div>
    </>
  );
};

export default About;
