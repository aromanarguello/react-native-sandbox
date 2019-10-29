import styled from "styled-components";

const StyledButton = styled.View`
  width: ${({ width }) => (width ? width : 200)};
  height: 70;
  background-color: #53dd6c;
  margin: 0 auto;
  margin-top: 45;
  align-items: center;
  justify-content: center;
  border-radius: 5;
`;

const Text = styled.Text`
  font-size: 36;
  color: white;
  letter-spacing: 2;
`;

export { StyledButton, Text };
