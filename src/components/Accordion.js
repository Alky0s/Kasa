import React, { useState } from "react";
import ArrowDown from "../assets/arrowDown.png";
import ArrowUp from "../assets/arrowUp.png";



const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        {isActive ? <img src={ArrowUp} alt="Flèche vers le haut" /> : <img src={ArrowDown} alt="Flèche vers le bas" />}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;