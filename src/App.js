import React, { Component } from "react";
import "./styles.css";
import jsonData from "./utills/jsonData.json";
import PlansHeader from "./components/PlansHeader";
import PlansCard from "./components/PlansCard";

export default class App extends Component {
  state = {
    plansData: jsonData,
    plans: Object.keys(jsonData),
    selectedPlan: "$300K-$400K"
  };

  render() {
    const { plans, selectedPlan, plansData } = this.state;
    const currentPlan = plansData[selectedPlan];
    return (
      <div className="App txtAlignCenter ">
        <div className="row">
          {plans.map((plan) => (
            <PlansHeader plan={plan} active={plan === selectedPlan} />
          ))}
        </div>
        <div className="row">
          {currentPlan.map((data) => (
            <PlansCard data={data} />
          ))}
        </div>
      </div>
    );
  }
}
