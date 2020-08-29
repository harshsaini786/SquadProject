import React, { Component } from "react";
import "./styles.css";
import jsonData from "./utills/jsonData.json";
import PlansHeader from "./components/PlansHeader";
import PlansCard from "./components/PlansCard";

export default class App extends Component {
  state = {
    plansData: jsonData,
    plans: Object.keys(jsonData),
    currentPlan: jsonData["$300K-$400K"]
  };

  render() {
    const { plans, currentPlan } = this.state;
    return (
      <div className="App">
        <div className="plansMenu">
          {plans.map((plan) => (
            <PlansHeader plan={plan} />
          ))}
        </div>
        <div className="plansMenu">
          {currentPlan.map((data) => (
            <PlansCard data={data} />
          ))}
        </div>
      </div>
    );
  }
}
