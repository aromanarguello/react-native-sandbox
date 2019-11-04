import React from "react";
import { InputContainer, Label, StyledInput } from "./Input.styles";
import * as Font from "expo-font";
const CustomInput = ({
  onChangeHandler,
  metric,
  metricName,
  metricLabel,
  width,
  placeholder,
  keyboardType,
  returnKeyType
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    Font.loadAsync({
      raleway: require("../../assets/Raleway-Bold.ttf")
    }).then(() => setIsLoaded(true));
  });
  return isLoaded ? (
    <InputContainer>
      <Label>{metricLabel}</Label>
      <StyledInput
        width={width}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChange={e => onChangeHandler(e, metricName)}
        value={metric}
        returnKeyType={returnKeyType}
      />
    </InputContainer>
  ) : null;
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
