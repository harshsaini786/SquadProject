import React from "react";
import "../styles.css";

export default function PlansHeader({ plan, active, handleClick }) {
  return (
    <div
      onClick={() => handleClick(plan)}
      className={
        (active ? "plansButtons" : "greyedColor") +
        " waves-effect waves-light btn col s12 defaultWidth"
      }
    >
      {plan}
    </div>
  );
}
