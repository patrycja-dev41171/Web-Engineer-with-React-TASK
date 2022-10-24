import React from "react";
import { Section2_Data } from "./Section2_Data";
import "./Section_2.scss";
import { Accordion } from "./Accordion/Accordion";

export const Section_2 = () => {
  return (
    <section className="section_2">
      <h2>Lacinia quis vel eros tempor orci.</h2>
      {Section2_Data.map((el) => {
        return (
          <Accordion key={el.id} index={el.id} title={el.title} content={el.content} />
        );
      })}
    </section>
  );
};
