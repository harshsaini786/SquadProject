import React from "react";
import "../styles.css";

export default function EnterpriseCard({ handleClick }) {
  return (
    <div className="row col s12 m6 l3">
        <div>&nbsp;</div>
      <div className="plansButtons">Enterprise</div>
      <div className="enterpriseText">
        Want more than 80 qualified leads each month?
      </div>
      <div onClick={() => handleClick()} className="actionButtonOrange">
        Get In Touch
      </div>
    </div>
  );
}
