import styled from "styled-components";
import { Input } from "native-base";

const InputContainer = styled.View`
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50;
  height: 70;
`;

const StyledInput = styled(Input)`
  border-radius: 5;
  width: ${({ width }) => (width ? width : 200)};
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const Label = styled.Text`
  margin-left: 4;
  font-weight: bold;
  font-size: 15;
  font-family: ${({ theme }) => theme.font};
`;

export { InputContainer, Label, StyledInput };
