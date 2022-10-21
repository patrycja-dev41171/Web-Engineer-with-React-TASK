import React, { useState } from "react";
import { Button } from "../buttons/btnGreen/Button";
import { MenuData } from "./MenuData";
import "./Menu.scss";
import { MenuIcon } from "./MenuIcon/MenuIcon";
import { useNavigate } from "react-router-dom";

export const Menu = (props: { page: string }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="menu">
      <ul className={`menu__ul ${openMenu ? "menu__ul--open" : null}`}>
        {MenuData.map((li, index) => {
          return (
            <li
              className={`menu__ul__li ${
                props.page === li.title ? "menu__ul__li--active" : null
              }`}
              key={index}
              onClick={() => navigate(li.path)}
            >
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
