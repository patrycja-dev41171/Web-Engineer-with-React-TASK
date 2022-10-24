import React from "react";
import { Blocks } from "./Blocks/Blocks";
import "./Section_4.scss";

export const Section_4 = () => {
  return (
    <section className="section_4">
      <h2>Massa tempor nec feugiat nisl pretium fusce</h2>
      <p>
        Pellentesque <span>habitant</span> morbi tristique senectus et netus et
        malesuada.
        <span>Ipsum faucibus vitae</span> aliquet nec ullamcorper sit amet risus
        nullam. Dictum varius duis at consectetur <span>lorem donec</span> massa
        sapien. Massa tempor nec feugiat nisl pretium fusce.
      </p>
      <p>Elit scelerisque mauris pellentesque?</p>
      <Blocks />
    </section>
  );
};
