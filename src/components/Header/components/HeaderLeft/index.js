import React, { Component } from "react";

import { withNavigation } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Content } from "./style";

class HeaderLeft extends Component {
  handleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <Content onPress={this.handleDrawer}>
        <MaterialIcons name="menu" size={20} color="#fff" />
      </Content>
    );
  }
}

export default withNavigation(HeaderLeft);
