import React from 'react';
import styled from 'styled-components';
import { array, object, func } from 'prop-types';
import { Picker, Item } from 'native-base';

const DropdownContainer = styled(Item)`
  margin-top: 0;
  width: 300;
`;

const StyledPicker = styled(Picker)``;

const Dropdown = ({ activityLevels, metric, setMetric }) => (
  <DropdownContainer picker>
    <StyledPicker
      mode="dropdown"
      selectedValue={metric.activityLevel}
      onValueChange={itemValue => {
        setMetric({ ...metric, activityLevel: itemValue });
      }}
    >
      {activityLevels.map(({ level, multiplier }) => (
        <StyledPicker.Item label={level} value={multiplier} key={level} />
      ))}
    </StyledPicker>
  </DropdownContainer>
);

Dropdown.propTypes = {
  activityLevels: array.isRequired,
  metric: object.isRequired,
  setMetric: func.isRequired,
};

export default Dropdown;
