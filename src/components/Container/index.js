import React, { Component } from "react";
import { SafeAreaView } from "react-native";
// import Spinner from "react-native-loading-spinner-overlay";

import { colors } from "~/styles";

import { App } from "./style";

const iosBarStyle = {
  backgroundColor: colors.primary
};

export default class Container extends Component {
  render() {
    return (
      <SafeAreaView style={iosBarStyle}>
        {/* <Spinner visible={false} /> */}
        <App>{this.props.children}</App>
      </SafeAreaView>
    );
  }
}
