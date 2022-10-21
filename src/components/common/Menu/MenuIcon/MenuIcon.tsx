import React from "react";
import "./MenuIcon.scss";

export const MenuIcon = (props: any) => {
  return (
    <div className="menu__icon" onClick={() => props.open()}>
      <input className="menu__icon__checkbox" type="checkbox" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
