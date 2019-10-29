import React from "react";
import { StyledButton, Text } from "./Button.styles";
import { TouchableOpacity } from "react-native";

const Button = ({ title, width, onSubmitHandler }) => {
  return (
    <TouchableOpacity>
      <StyledButton width={width}>
        <Text onPress={() => onSubmitHandler()}>{title}</Text>
      </StyledButton>
    </TouchableOpacity>
  );
};

export default Button;
