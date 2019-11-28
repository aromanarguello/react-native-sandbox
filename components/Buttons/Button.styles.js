import styled from 'styled-components/native';

const StyledButton = styled.View`
  width: ${({ width }) => width || 200};
  height: ${({ height }) => height || 70};
  background-color: ${({ theme: { colors } }) => colors.successBlue};
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 5;
`;

const Text = styled.Text`
  font-size: ${({ fontSize }) => fontSize || 36};
  color: white;
  letter-spacing: 2.5;
`;

export { StyledButton, Text };
