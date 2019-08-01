import React, { Component } from "react";
import { View, Text } from "react-native";

// import styles from './style';

class Login extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black" }}>
        <Text style={{ fontSize: 40, color: "#3EF124" }}>Olá Mundo!</Text>
        <Text style={{ fontSize: 40, color: "#4AF233" }}>Olá Mundo!</Text>
        <Text style={{ fontSize: 40, color: "#5BEC45" }}>Olá Mundo!</Text>
        <Text style={{ fontSize: 40, color: "#48F329" }}>ORIGINAL</Text>
      </View>
    );
  }
}

export default Login;
