import React from "react";
import "../styles.css";

export default function PlansHeader({ plan, active }) {
  return (
    <div
      className={
        (active ? "plansButtons" : "greyedColor") +
        " waves-effect waves-light btn col s12 defaultWidth"
      }
    >
      {plan}
    </div>
  );
}
