import React from "react";
import { StyledButton, Text } from "./Button.styles";
import { TouchableOpacity } from "react-native";

const Button = ({
  title,
  width,
  onSubmitHandler,
  height,
  fontSize,
  handlerArgs
}) => {
  return (
    <TouchableOpacity>
      <StyledButton width={width} height={height}>
        <Text fontSize={fontSize} onPress={() => onSubmitHandler(handlerArgs)}>
          {title}
        </Text>
      </StyledButton>
    </TouchableOpacity>
  );
};

export default Button;
