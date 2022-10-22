import React from "react";
import "./Slider.scss";
import { Button } from "../common/buttons/btnGreen/Button";

export const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__info">
        <h2>
          <span>Duis aute irure</span> dolor in reprehenderit
        </h2>
        <p>
          Nam at lectus urna duis convallis. Id semper risus in hendrerit
          gravida rutrum quisque non tellus. Elit eget gravida cum sociis
          natoque. Ultrices neque ornare aenean euismod elementum nisi quis
          eleifend. Arcu felis bibendum ut tristique et egestas.{" "}
        </p>
        <Button title="discover now" size="medium" border={false} />
      </div>
      <img src="/assets/photo.png" alt="" />
    </section>
  );
};
