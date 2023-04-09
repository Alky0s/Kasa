import React, { useState } from "react";
import ArrowDown from "../assets/arrowDown.png";
import ArrowUp from "../assets/arrowUp.png";

const Accordion = ({ title, content }) => {
  // I use useState on the accordion
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      {/* When I click, my useState become true */}
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        {/* If it's true, I change the arrow image */}
        {isActive ? <img src={ArrowUp} alt="Flèche vers le haut" /> : <img src={ArrowDown} alt="Flèche vers le bas" />}
      </div>
      {/* And the content appears */}
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;