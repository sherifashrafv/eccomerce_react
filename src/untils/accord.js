import React, { useState } from "react";
import "../pages/faq/index.scss";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accord-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div role={"button"} className="accord d-flex gap-2 align-items-center">
          <div className="icon-accord">{isActive ? "-" : "+"}</div>
          <div>{title}</div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content pe-5 accord">{content}</div>
      )}
    </div>
  );
};

export default Accordion;
