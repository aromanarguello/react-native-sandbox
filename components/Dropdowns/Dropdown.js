import React from 'react';
import styled from 'styled-components';
import { Picker, Item } from 'native-base';

const DropdownContainer = styled(Item)`
  margin-top: 0;
  width: 300;
`;

const StyledPicker = styled(Picker)``;

const Dropdown = ({
  activityLevels,
  metric,
  setMetric,
  setIsShowingDropdown,
}) => {
  return (
    <DropdownContainer picker>
      <StyledPicker
        mode="dropdown"
        selectedValue={metric.activityLevel}
        onValueChange={itemValue => {
          setMetric({ ...metric, activityLevel: itemValue });
          setIsShowingDropdown(false);
        }}
      >
        {activityLevels.map(({ level, multiplier }, i) => (
          <StyledPicker.Item label={level} value={multiplier} key={i} />
        ))}
      </StyledPicker>
    </DropdownContainer>
  );
};

export default Dropdown;
