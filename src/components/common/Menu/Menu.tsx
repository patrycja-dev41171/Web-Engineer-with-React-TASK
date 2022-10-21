import React, { useState } from "react";
import { Button } from "../buttons/btnGreen/Button";
import { MenuData } from "./MenuData";
import "./Menu.scss";
import { MenuIcon } from "./MenuIcon/MenuIcon";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="menu">
      <ul className={`menu__ul ${openMenu ? "menu__ul--open" : null}`}>
        {MenuData.map((li, index) => {
          return (
            <li className="menu__ul__li" key={index}>
              {li.title}
            </li>
          );
        })}
      </ul>
      <Button title="contact us" size="small" border={false} />
      <MenuIcon open={openMenuHandler} />
    </div>
  );
};
