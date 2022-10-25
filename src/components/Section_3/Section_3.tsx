import React from "react";
import "./Section_3.scss";

export const Section_3 = () => {
  return (
    <section className="section_3">
      <div className="section_3__title">
        <p>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</p>
      </div>
      <div className="section_3__text">
        <img
          className="icon"
          src="assets/section3-icon1.png"
          alt="Quotation mark icon"
        />
        <p className="section_3__text__quote">
          Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus
          in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus
          faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum
          faucibus. Tristique risus nec feugiat in fermentum. Elit duis
          tristique sollicitudin nibh sit amet commodo nulla.
        </p>
        <div className="section_3__text__author">
          <p>Faucibus Vitae, Office Assistant</p>
          <img
            className="icon"
            src="assets/section3-icon2.png"
            alt="Quotation mark icon"
          />
        </div>
        <img
          className="section_3__text__img"
          src="assets/invision.png"
          alt="Company logo photos: InVision."
        />
      </div>
    </section>
  );
};
