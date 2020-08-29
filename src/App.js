import React, { Component } from "react";
import "./styles.css";
import jsonData from "./utills/jsonData.json";
import PlansHeader from "./components/PlansHeader";
import PlansCard from "./components/PlansCard";
import EnterpriseCard from "./components/EnterpriseCard";

export default class App extends Component {
  state = {
    plansData: jsonData,
    plans: Object.keys(jsonData),
    selectedPlan: "$300K-$400K",
    planSelectedText: ""
  };

  headerClick = (plan) => {
    this.setState({ selectedPlan: plan });
  };

  contactUs = (plan) => {
    // document.getElementById("submitModal").style.cssText =
    //   "display:block; top:20%; z-index: 999;";
    // document.getElementById("overlay").style.cssText =
    //   "overflow: hidden !important;";
    let text = "";
    if(plan){text = plan.plan}
    else{ text = "Enterprise"}
    this.setState({planSelectedText: text})
  };

  render() {
    const { plans, selectedPlan, plansData, planSelectedText } = this.state;
    const currentPlan = plansData[selectedPlan];
    return (
      <div id="main" className="App txtAlignCenter ">
        <div className="row">
          {plans.map((plan) => (
            <PlansHeader
              key={plan}
              plan={plan}
              active={plan === selectedPlan}
              handleClick={this.headerClick}
            />
          ))}
        </div>
        <div className="row">
          {currentPlan.map((data) => (
            <PlansCard
              key={data.plan}
              data={data}
              handleClick={this.contactUs}
            />
          ))}
          <EnterpriseCard handleClick={this.contactUs} />
        </div>
        <div id="submitModal" className="modal">
          <div class="modal-content">
            <h4>Get Started with SquadVoice</h4>
            <hr />
            <div className="planSelected modalText">Plan Selected: {planSelectedText}</div>            <div className="modalText">Name</div>
            <input id="name" type="text" />
            <div className="row">
              <div class="col s5 m5 l5 modalText">Email</div>
              <div className="col s5 m5 l5 modalText marginLeft">Phone No.</div>
            </div>
            <div className="row">
              <input id="email" className="col s5 m5 l5" type="email" />
              <input id="phone" className="col s5 m5 l5 marginLeft" type="text" />
            </div>
            <div className="row">
              <div class="col s5 m5 l5 modalText">
                No. of leads you generated in a month
              </div>
              <div className="col s5 m5 l5 modalText marginLeft">
                Total leads in your CRM
              </div>
            </div>
            <div className="row">
              <input id="leadsInAMonth" className="col s5 m5 l5" type="number" />
              <input id="crmLeads" className="col s5 m5 l5 marginLeft" type="number" />
            </div>
            <div className="row">
              <div class="col s5 m5 l5 modalText">Which CRM do you use?</div>
              <div className="col s5 m5 l5 modalText marginLeft">
                No. of Agents
              </div>
            </div>
            <div className="row">
              <input id="crm" className="col s5 m5 l5" type="text" />
              <input id="noOfAgent" className="col s5 m5 l5 marginLeft" type="number" />
            </div>
            <div className="modalText">What are your biggest sources?</div>
            <div className="modalText dealSource">
              <input type="checkbox" value="Zillow"/> Zillow
              <input type="checkbox" value="Realtor"/> Realtor
              <input type="checkbox" value="Ylopo"/> Ylopo
              <input type="checkbox" value="Others"/> Others
            </div>
            <div className="modalText source">How did you hear about us?</div>
            <div className="modalText">
              <input type="checkbox" value="Google"/> Google
              <input type="checkbox" value="Facebook"/> Facebook
              <input type="checkbox" value="Email"/> Email
              <input type="checkbox" value="Friends"/> Friends
              <input type="checkbox" value="Real Closers"/> Real Closers
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}
