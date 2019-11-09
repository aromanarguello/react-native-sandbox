import styled from "styled-components";
import { Form } from "native-base";
const MetricInputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 200;
`;

const DropdownContainer = styled.View`
  width: 100%;
  height: 100;
  margin-top: 45;
  align-items: center;
`;

const HeightContainer = styled.View`
  width: 100%;
  height: 100;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 15;
  padding-left: 55;
  margin-bottom: 15;
`;

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  height: 100%;
`;

const StyledForm = styled(Form)`
  flex: 1;
`;

export {
  MetricInputContainer,
  DropdownContainer,
  HeightContainer,
  Container,
  StyledForm
};
