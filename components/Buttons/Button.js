import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledButton, Text } from './Button.styles';

const Button = ({
  title,
  width,
  onSubmitHandler,
  height,
  fontSize,
  handlerArgs
}) => (
  <TouchableOpacity>
    <StyledButton width={width} height={height}>
      <Text
        testID="button"
        fontSize={fontSize}
        onPress={() => onSubmitHandler(handlerArgs)}
      >
        {title}
      </Text>
    </StyledButton>
  </TouchableOpacity>
);

export default Button;
