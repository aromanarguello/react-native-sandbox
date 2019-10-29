import React from "react";
import { InputContainer, MetricInput, Label } from "./Input.styles";
import { Input } from "native-base";

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
      <MetricInput regular width={width}>
        <Input
          placeholder={placeholder}
          onChange={e => onChangeHandler(e, metricName)}
          value={metric}
          // keyboardType={keyboardType}
          returnKeyType={returnKeyType}
        />
      </MetricInput>
    </InputContainer>
  );
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
