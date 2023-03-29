import React, { useState } from "react";
import AboutBackground from "../components/AboutBackground";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <Header />
      <AboutBackground />
      <div className="accordions-about">
        <div className="accordions-about__item"><Accordion title="Fiabilité" active={active} setActive={setActive} content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/></div>
        <div className="accordions-about__item"><Accordion title="Respect" active={active} setActive={setActive} content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/></div>
        <div className="accordions-about__item"><Accordion title="Service" active={active} setActive={setActive} content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/></div>
        <div className="accordions-about__item"><Accordion title="Sécurité" active={active} setActive={setActive} content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
