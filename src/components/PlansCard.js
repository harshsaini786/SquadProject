import React from "react";
import "../styles.css";

export default function PlansCard({ data }) {
  return (
    <div className="row col s12 m6 l3">
      <div className="plansButtons">{data.plan}</div>
      <div className="perLeadPrice">{data.pricePerLiveTransfer}</div>
      <div>Per Qualifies Lead</div>
      <hr className="hLineStyle" />
      <div>Qualified Leads Per Month</div>
      <div>{data.leadsPerMonth}</div>
      <hr className="hLineStyle" />
      <div>Platform Fee Per Month</div>
      <div>{data.totalPlatformPrice}</div>
      <div className="plansButtons">{data.finalPackagePrice}/mo</div>

      <div className="actionButtonOrange">Start Your Trial</div>
    </div>
  );
}
