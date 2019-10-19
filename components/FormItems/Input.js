import React from "react";
import styled from "styled-components";
import { ToucableWithoutFeedback, Keyboard } from "react-native";

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
  margin-top: 5;
  margin-left: 10;
  padding-left: 10;
  border-color: #95a5a6;
  border-width: 1;
  border-radius: 2.5;
`;

const Label = styled.Text`
  margin-left: 10;
`;

const DismissKeyboard = ({ children }) => (
  <ToucableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </ToucableWithoutFeedback>
);

const Input = ({
  onChangeHandler,
  metric,
  metricName,
  metricLabel,
  width,
  placeholder,
  keyboardType
}) => {
  return (
    // <DismissKeyboard>
    <InputContainer>
      <Label>{metricLabel}</Label>
      <MetricInput
        width={width}
        placeholder={placeholder}
        onChange={e => onChangeHandler(e, metricName)}
        value={metric}
        keyboardType={keyboardType}
        returnKeyType='next'
      />
    </InputContainer>
    // </DismissKeyboard>
  );
};

Input.displayName = "Input";

export default Input;
