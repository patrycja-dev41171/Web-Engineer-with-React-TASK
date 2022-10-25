import React from "react";
import { Container } from "../common/Container/Container";
import { Menu } from "../common/Menu/Menu";
import { Slider } from "../Slider/Slider";
import { Section_2 } from "../Section_2/Section_2";
import { Section_3 } from "../Section_3/Section_3";
import { Section_4 } from "../Section_4/Section_4";
import { Section_7 } from "../Section_7/Section_7";
import {Footer} from "../Footer/Footer";
import "./HomeView.scss";

export const HomeView = () => {
  return (
    <Container>
      <header>
        <Menu page="overview" />
        <h1 className="logo">Future one</h1>
      </header>
      <main>
        <Slider />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_7 />
      </main>
        <footer>
            <Footer/>
        </footer>
    </Container>
  );
};
