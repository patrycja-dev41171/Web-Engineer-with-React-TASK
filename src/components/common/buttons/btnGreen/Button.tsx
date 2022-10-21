import React from "react";
import "./Button.scss";

interface buttonProps {
  title: string;
  size: string;
  border: boolean;
}

export const Button = (props: buttonProps) => {
  return (
    <button
      className={`btn btn--${props.size} ${
        props.border ? "btn--border" : null
      }`}
    >
      {props.title}
    </button>
  );
};
