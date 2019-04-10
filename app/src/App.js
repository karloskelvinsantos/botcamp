import React, { Component } from "react";

import LoginWrapper from "./components/LoginWrapper";
import LogoBotCamp from "./components/LogoBotCamp";
import BtnBotCamp from "./components/BtnBotCamp";

import "./assets/css/reset.css";

export default class App extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoBotCamp />
        <BtnBotCamp />
      </LoginWrapper>
    );
  }
}
