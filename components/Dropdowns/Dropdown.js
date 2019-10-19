import React, { memo } from "react";
import styled from "styled-components";
import { Picker } from "react-native";

const Dropdown = ({
  activityLevels,
  metric,
  setMetric,
  setIsShowingDropdown
}) => {
  return (
    <>
      <Picker
        on
        selectedValue={metric.activityLevel}
        onValueChange={itemValue => {
          setMetric({ ...metric, activityLevel: itemValue });
          setIsShowingDropdown(false);
        }}>
        {activityLevels.map(({ level, multiplier }, i) => (
          <Picker.Item label={level} value={multiplier} key={i} />
        ))}
      </Picker>
    </>
  );
};

export default Dropdown;
