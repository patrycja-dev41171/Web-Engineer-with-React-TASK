import React from "react";
import { Container } from "../common/Container/Container";
import "./HomeView.scss";
import { Menu } from "../common/Menu/Menu";
import { Slider } from "../Slider/Slider";
import { Section_2 } from "../Section_2/Section_2";

export const HomeView = () => {
  return (
    <Container>
      <header>
        <Menu page="overview" />
        <h1 className="logo">Future one</h1>
      </header>
      <Slider></Slider>
      <Section_2 />
    </Container>
  );
};
