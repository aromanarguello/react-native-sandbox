import React, { memo } from "react";
import styled from "styled-components";
import { Picker, Item } from "native-base";

const DropdownContainer = styled(Item)`
  margin-top: 0;
`;

const Dropdown = ({
  activityLevels,
  metric,
  setMetric,
  setIsShowingDropdown
}) => {
  return (
    <DropdownContainer picker>
      <Picker
        mode='dropdown'
        selectedValue={metric.activityLevel}
        onValueChange={itemValue => {
          setMetric({ ...metric, activityLevel: itemValue });
          setIsShowingDropdown(false);
        }}>
        {activityLevels.map(({ level, multiplier }, i) => (
          <Picker.Item label={level} value={multiplier} key={i} />
        ))}
      </Picker>
    </DropdownContainer>
  );
};

export default Dropdown;
