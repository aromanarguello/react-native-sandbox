import React from "react";
import styled from "styled-components";

const InputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50;
  height: 50;
`;

const MetricInput = styled.TextInput`
  width: 200;
  height: 66;
  margin-left: 10;
  background-color: white;
  border-radius: 2.5;
`;

const Label = styled.Text`
  margin-left: 10;
`;

const Input = ({ onChangeHandler, metric, metricName, metricLabel }) => {
  return (
    <InputContainer>
      <Label>{meticLabel}</Label>
      <MetricInput
        placeholder='enter text'
        onChange={e => onChangeHandler(e, metricName)}
        value={metric}
      />
    </InputContainer>
  );
};

export default Input;
