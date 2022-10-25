import React, { useState } from "react";
import "./Accordion.scss";
import { AccordionIcon } from "./AccordionIcon/AccordionIcon";

interface AccordionProps {
  index: string;
  title: string;
  content: string;
}

export const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__info">
        <p className="accordion__info__id">{props.index}.</p>
        <h3 className="accordion__info__title">{props.title}</h3>
      </div>
      <AccordionIcon open={openHandler} />
      <p
        className={`accordion__content ${
          isOpen ? "accordion__content--opened" : "accordion__content--closed"
        }`}
      >
        {props.content}
      </p>
      <hr />
    </div>
  );
};
