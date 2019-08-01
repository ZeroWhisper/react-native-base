import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";

export const Content = styled.View`
  flex: 1;
  margin: 10px 0;
`;

export const MyCarousel = styled(Carousel)`
  padding-top: 20px;
  flex: 1;
`;

export const TitleBox = styled.View`
  display: flex;
  padding: 0 15px;
  height: 65px;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: blue;
`;

export const Day = styled.View`
  flex: 1;
  border: 1px solid green;
  border-radius: 10px;
`;

export const DayImage = styled(ImageBackground)`
  flex: 1;
`;

export const DayBlock = styled.View`
  flex: ${props => props.flex};
  justify-content: center;
  align-items: center;
`;

export const DayTitle = styled.Text`
  color: white;
  font-size: 40;
`;

export const DayBoxMessage = styled.View`
  background-color: #fff;
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px 20px;
`;

export const DayMessage = styled.Text`
  padding: 5px 5px;
  color: blue;
`;

export const Footer = styled.View`
  display: flex;
  padding: 0 15px;
  height: 50px;
`;
