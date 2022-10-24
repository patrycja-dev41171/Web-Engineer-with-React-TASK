import React, { useState } from "react";
import "./AccordionIcon.scss";

export const AccordionIcon = (props: { open(): void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`circle-plus closed ${isOpen ? "opened" : ""}`}>
        <div
          className="circle"
          onClick={() => {
            props.open();
            setIsOpen(!isOpen);
          }}
        >
          <div className="horizontal"></div>
          <div className="vertical"></div>
        </div>
      </div>
    </>
  );
};
