import styled from "styled-components";
import { CardItem } from "native-base";

const Loading = styled.Text``;

const Error = styled.Text`
  color: red;
  align-self: center;
`;

const CardContent = styled(CardItem)`
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 350;
  padding: 0;
`;
const Picture = styled.Image``;

const Label = styled.Text`
  width: 150px;
  align-self: flex-start;
  margin-top: 20;
`;

const Calories = styled.Text`
  width: 150px;
  margin-top: 20;
`;

const CardContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  padding-top: 50px;
`;

const InfoContainer = styled.View``;

export {
  Loading,
  Error,
  CardContent,
  Picture,
  Label,
  Calories,
  CardContainer,
  InfoContainer
};
