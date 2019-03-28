import React, { Component } from "react";
import BtnBotCamp from "./components/BtnBotCamp";
import LogoBotCamp from "./components/LogoBotCamp";

import "./assets/css/geral.css";

export default class App extends Component {
  render() {
    return (
      <div className="div-geral">
        <div className="div-logo">
          <LogoBotCamp />
        </div>
        <div className="div-btn">
          <BtnBotCamp />
        </div>
      </div>
    );
  }
}
