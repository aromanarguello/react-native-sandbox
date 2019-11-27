import React from 'react';
import * as Font from 'expo-font';
import { func, number, string } from 'prop-types';
import { InputContainer, Label, StyledInput } from './Input.styles';

const raleway = require('../../assets/Raleway-Bold.ttf');

const CustomInput = ({
  onChangeHandler,
  metric,
  metricName,
  metricLabel,
  width,
  placeholder,
  keyboardType,
  returnKeyType,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    Font.loadAsync({
      raleway,
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

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  onChangeHandler: func,
  metric: string,
  metricName: string,
  metricLabel: string,
  width: number,
  placeholder: string,
  keyboardType: string,
  returnKeyType: string,
};

export default CustomInput;
