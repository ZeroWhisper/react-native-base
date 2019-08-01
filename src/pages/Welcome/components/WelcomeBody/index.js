import React, { Component } from "react";
import { View, Text } from "react-native";

import Body from "~/components/Body";
import { metrics } from "~/styles";

import { Content } from "./style";

export default class WelcomeBody extends Component {
  render() {
    console.tron.log("metrics", metrics);
    return (
      <Body>
        <Content>
          <Text>Olá Mundo!</Text>
        </Content>
      </Body>
    );
  }
}
