import React, { Component } from "react";

import { Content } from "./style";

export default class Body extends Component {
  render() {
    return <Content>{this.props.children}</Content>;
  }
}
