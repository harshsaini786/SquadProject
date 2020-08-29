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

  closeModal = () => {
    document.getElementById("submitModal").style.cssText =
       "display:None; top:20%; z-index: 999;";
    document.getElementById("overlay").style.display = "none";    
  }

  handleSubmit = () => {
    let dealSource = [];
    let source = [];

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let leadsInAMonth = document.getElementById("leadsInAMonth").value;
    let crmLeads = document.getElementById("crmLeads").value;
    let crm = document.getElementById("crm").value;
    let noOfAgent = document.getElementById("noOfAgent").value;


    for(let a of document.querySelector(".dealSource").children){
      a.checked && dealSource.push(a.value)
    }
    for(let a of document.querySelector(".source").children){
      a.checked && source.push(a.value)
    }

    alert(JSON.stringify({name, email, phone, leadsInAMonth, crmLeads, crm, noOfAgent, dealSource, source}));
    this.closeModal();
  }

  contactUs = (plan) => {
     document.getElementById("submitModal").style.cssText =
       "display:block; top:20%; z-index: 999;";
    // document.getElementById("overlay").style.cssText =
    //   "overflow: hidden !important;";
    let text = "";
    if(plan){text = plan.plan}
    else{ text = "Enterprise"}
    this.setState({planSelectedText: text})
    document.getElementById("overlay").style.display = "block";
  };

  render() {
    const { plans, selectedPlan, plansData, planSelectedText } = this.state;
    const currentPlan = plansData[selectedPlan];
    return (
      <>
      <div id="overlay"></div>
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
      </div>

      <div id="submitModal" className="modal">
          <div class="modal-content">
            <h5>Get Started with SquadVoice</h5> <span className="modal-close closeButton" onClick={this.closeModal}>X</span>
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
            <button onClick={this.handleSubmit} class="btnOrange modal-close waves-effect waves-green btn-flat">
              Submit
            </button>
          </div>
        </div>

      </>
    );
  }
}
