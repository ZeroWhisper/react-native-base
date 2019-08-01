import React, { Component } from "react";

import Header from "~/components/Header";

import DashboardBody from "./components/DashboardBody";

import { Container } from "./style";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header title={"Dashboard"} />
        <DashboardBody />
      </Container>
    );
  }
}
