import React from "react";
import styled from "styled-components";
import { Picker } from "react-native";
const StyledPicker = styled.Picker`
  padding-right: 10;
  padding-left: 10;
`;

const Dropdown = ({ activityLevels, metric, setMetric }) => {
  return (
    <>
      <Picker
        selectedValue={metric.activityLevel}
        onValueChange={itemValue =>
          setMetric({ ...metric, activityLevel: itemValue })
        }>
        {activityLevels.map(({ level }, i) => (
          <Picker.Item label={level} value={level} key={i} />
        ))}
      </Picker>
    </>
  );
};

export default Dropdown;
