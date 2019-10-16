import React from "react";
import styled from "styled-components";

const Label = styled.Text`
  padding-top: 50;
  padding-bottom: 0;
  margin-bottom: 0;
  align-self: flex-start;
`;
const StyledPicker = styled.Picker`
  margin: 0;
  padding: 0;
`;

const Dropdown = ({ activityLevels }) => {
  return (
    <>
      <Label>Activity Level:</Label>
      <StyledPicker>
        {activityLevels.map(({ level }, i) => (
          <StyledPicker.Item label={level} key={i} />
        ))}
      </StyledPicker>
    </>
  );
};

export default Dropdown;
