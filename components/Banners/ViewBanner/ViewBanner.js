import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Text = styled.Text``;

const ViewBanner = ({ suggestedCaloricIntake }) => {
  return (
    <Container>
      <Text>{suggestedCaloricIntake}</Text>
    </Container>
  );
};

export default ViewBanner;
