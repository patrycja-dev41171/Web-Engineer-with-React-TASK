import React, { MouseEventHandler } from "react";
import "./Button.scss";

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

interface buttonProps {
  type?: ButtonType.button | ButtonType.reset | ButtonType.submit;
  title: string;
  size: string;
  border: boolean;
  onClick?: MouseEventHandler;
}

export const Button = (props: buttonProps) => {
  return (
    <button
      type={props.type}
      className={`btn btn--${props.size} ${
        props.border ? "btn--border" : null
      }`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
