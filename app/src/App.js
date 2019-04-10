import React, { Component, Fragment } from "react";

import LogoBotCamp from "./components/LogoBotCamp";
import BtnBotCamp from "./components/BtnBotCamp";

import "./assets/css/reset.css";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <LogoBotCamp />
        <BtnBotCamp />
      </Fragment>
    );
  }
}
