import React from "react";
import styled from "styled-components";

const InputContainer = styled.View`
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50;
  height: 50;
`;

const MetricInput = styled.TextInput`
  width: ${({ width }) => (width ? width : 200)};
  height: 40;
  margin-left: 10;
  background-color: white;
  border-radius: 2.5;
`;

const Label = styled.Text`
  margin-left: 10;
`;

const Input = ({
  onChangeHandler,
  metric,
  metricName,
  metricLabel,
  width,
  placeholder
}) => {
  return (
    <InputContainer>
      <Label>{metricLabel}</Label>
      <MetricInput
        width={width}
        placeholder={placeholder}
        onChange={e => onChangeHandler(e, metricName)}
        value={metric}
        keyboardType={"numeric"}
      />
    </InputContainer>
  );
};

Input.displayName = "Input";

export default Input;
