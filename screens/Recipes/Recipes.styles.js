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
  margin: 0;
`;
const Picture = styled.Image`
  margin-right: 20;
  margin-left: 10;
`;

const Label = styled.Text`
  width: 100%;
  align-self: flex-end;
  margin-top: 20;
  margin-bottom: 15;
  font-size: 15;
  font-weight: bold;
`;

const RecipeInfo = styled.Text`
  width: 100%;
`;

const CardContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: 30px 10px 0 10px;
`;

const InfoContainer = styled.View`
  width: 50%;
  justify-content: flex-start;
  padding: 0 0 10px 0;
`;

export {
  Loading,
  Error,
  CardContent,
  Picture,
  Label,
  RecipeInfo,
  InfoContainer,
  CardContainer
};
