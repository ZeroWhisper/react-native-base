import styled from "styled-components/native";

import { colors } from "~/styles";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${colors.barColor};
  height: 60px;
`;

export const Center = styled.View`
  display: flex;
  flex: 12;
  align-items: center;
  justify-content: center;
`;

export const CenterText = styled.Text`
  color: #fff;
`;

export const Aside = styled.View`
  display: flex;
  flex: 2;
`;
