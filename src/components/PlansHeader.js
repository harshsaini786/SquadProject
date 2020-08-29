import React, { Component } from "react";
import "../styles.css";

export default function PlansHeader({ plan }) {
  return <button className="planButton">{plan}</button>;
}
