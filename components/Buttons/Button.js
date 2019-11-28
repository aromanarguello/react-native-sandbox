import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StyledButton, Text } from './Button.styles';

const Button = ({ title, width, onSubmitHandler, height, fontSize, handlerArgs }) => (
  <TouchableOpacity>
    <StyledButton width={width} height={height}>
      <Text testID="button" fontSize={fontSize} onPress={() => onSubmitHandler(handlerArgs)}>
        {title}
      </Text>
    </StyledButton>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  onSubmitHandler: PropTypes.func,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  handlerArgs: PropTypes.any,
};

export default Button;
