import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

import Body from "~/components/Body";

import {
  Content,
  MyCarousel,
  TitleBox,
  Title,
  Day,
  DayImage,
  DayBlock,
  DayTitle,
  DayBoxMessage,
  DayMessage,
  Footer
} from "./style";

export default class DashboardBody extends Component {
  state = {
    days: [
      {
        id: 0,
        image: "https://picsum.photos/200/300",
        img: require("../../../../assets/image/crossfit1.jpg"),
        title: "Dia 1",
        message: "Hoje é o seu treinamento"
      },
      {
        id: 1,
        image: "https://picsum.photos/200/300",
        img: require("../../../../assets/image/crossfit2.jpg"),
        title: "Dia 2",
        message: "Hoje é o seu treinamento1"
      },
      {
        id: 2,
        image: "https://picsum.photos/200/300",
        img: require("../../../../assets/image/crossfit1.jpg"),
        title: "Dia 3",
        message: "Hoje é o seu treinamento2"
      },
      {
        id: 3,
        image: "https://picsum.photos/200/300",
        img: require("../../../../assets/image/crossfit2.jpg"),
        title: "Dia 4",
        message:
          "Hoje é o seu treinamento! Hoje é o seu treinamento! Hoje é o seu treinamento! Hoje é o seu treinamento! Hoje é o seu treinamento!"
      }
    ]
  };

  _renderItem = ({ item, index }) => {
    return (
      <Day>
        <DayImage
          style={{ borderBottomLeftRadius: 10 }}
          // source={{ uri: item.image }}
          source={item.img}
          // style={{ width: metrics.width, height: metrics.height }}
          resizeMode={"cover"}
        >
          <DayBlock flex={1}>
            <DayTitle>{item.title}</DayTitle>
          </DayBlock>
          <DayBlock flex={2}>
            <DayBoxMessage>
              <DayMessage>{item.message}</DayMessage>
            </DayBoxMessage>
          </DayBlock>
        </DayImage>
      </Day>
    );
  };

  render() {
    const { width } = Dimensions.get("window");

    return (
      <Body>
        <Content>
          <View onLayout={e => this.setState({ ...this.state })} />
          <TitleBox>
            <Title>MY APPLICATION NAME</Title>
          </TitleBox>
          <MyCarousel
            ref={c => (this._carousel = c)}
            data={this.state.days}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width * 0.9}
            layout={"stack"}
          />
          <Footer />
        </Content>
      </Body>
    );
  }
}
