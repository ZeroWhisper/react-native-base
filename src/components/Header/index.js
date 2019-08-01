import React, { Component } from "react";
import { View, Text } from "react-native";

import HeaderLeft from "./components/HeaderLeft";

import { Container, Aside, Center, CenterText } from "./style";

export default class Header extends Component {
  render() {
    const { title, left, right } = this.props;

    return (
      <Container>
        <Aside>{left || <HeaderLeft />}</Aside>
        <Center>
          <CenterText>{title || ""}</CenterText>
        </Center>
        <Aside>{right || <Text />}</Aside>
      </Container>
    );
  }
}
