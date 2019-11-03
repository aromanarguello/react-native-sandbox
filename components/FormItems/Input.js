import React from "react";
import { InputContainer, Label, StyledInput } from "./Input.styles";

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
  return (
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
  );
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
