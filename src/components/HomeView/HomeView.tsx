import React from "react";
import { Container } from "../common/Container/Container";
import "./HomeView.scss";
import { Menu } from "../common/Menu/Menu";
import { Slider } from "../Slider/Slider";

export const HomeView = () => {
  return (
    <Container>
      <header>
        <Menu page="overview" />
        <h1 className="logo">Future one</h1>
      </header>
      <Slider></Slider>
    </Container>
  );
};
