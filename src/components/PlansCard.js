import React, { Component } from "react";
import "../styles.css";

export default function PlansCard({ data }) {
  return (
    <div>
      <div>{data.plan}</div>
      <div>{data.pricePerLiveTransfer}</div>
      <div>{data.leadsPerMonth}</div>
      <div>{data.totalPlatformPrice}</div>
      <div>{data.finalPackagePrice}</div>
    </div>
  );
}
