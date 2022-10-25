import React from "react";
import "./Section_7.scss";
import { Button } from "../common/buttons/btnGreen/Button";

export const Section_7 = () => {
  return (
    <section className="section_7">
      <h3>Subscribe to our newsletter</h3>
      <div>
        <input type="text" placeholder="Company e-mail address" />
        <Button title="Subscribe" size="small btn--subs" border={true} />
      </div>
      <p>Chupa chups gummi bears shortbread candy</p>
    </section>
  );
};
