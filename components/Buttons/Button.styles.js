import styled from "styled-components";

const StyledButton = styled.View`
  width: ${({ width }) => (width ? width : 200)};
  height: ${({ height }) => (height ? height : 70)};
  background-color: ${({ theme }) => theme.colors.successGreen};
  margin: 0 auto;
  margin-top: 45;
  align-items: center;
  justify-content: center;
  border-radius: 5;
`;

const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 36)};
  color: white;
  letter-spacing: 2;
`;

export { StyledButton, Text };
