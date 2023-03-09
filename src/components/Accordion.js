import React, { useState } from "react";
import ArrowDown from "../assets/arrowDown.png"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <img src={ArrowDown} alt="Flèche vers le bas" />
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;