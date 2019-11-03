import styled from "styled-components";
import { Input } from "native-base";
import { Item } from "native-base";

const InputContainer = styled.View`
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50;
  height: 50;
`;

const MetricInput = styled(Item)`
  margin-top: 5;
  border-width: 1;
`;

const StyledInput = styled(Input)`
  border-radius: 2.5;
  padding-left: 10;
  margin-left: 10;
  height: 40;
  width: ${({ width }) => (width ? width : 200)};
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const Label = styled.Text`
  margin-left: 10;
`;
export { InputContainer, MetricInput, Label, StyledInput };
