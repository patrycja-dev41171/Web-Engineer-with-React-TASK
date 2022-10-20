import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: any;
}

export const Container = (props: ContainerProps) => {
  return <div className="container">{props.children}</div>;
};
