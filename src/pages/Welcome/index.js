import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Container from "~/components/Container";
import Header from "~/components/Header";

import WelcomeBody from "./components/WelcomeBody";

export default class Welcome extends Component {
  handlerDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <Container>
        <Header title={"Bem-Vindo!"} />
        <WelcomeBody />
      </Container>
    );
  }
}
