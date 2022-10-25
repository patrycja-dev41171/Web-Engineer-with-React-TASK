import React, { useState } from "react";
import "./Section_7.scss";
import { Button, ButtonType } from "../common/buttons/Button/Button";

export const Section_7 = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendingData = () => {
    //validation
    console.log(`Sending data(email: ${inputValue}) to the server.`);
    //response
    setInputValue("");
  };

  return (
    <section className="section_7">
      <h3>Subscribe to our newsletter</h3>
      <div>
        <input
          type="text"
          placeholder="Company e-mail address"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type={ButtonType.submit}
          title="Subscribe"
          size="small btn--subs"
          border={true}
          onClick={() => handleSendingData()}
        />
      </div>
      <p>Chupa chups gummi bears shortbread candy</p>
    </section>
  );
};
