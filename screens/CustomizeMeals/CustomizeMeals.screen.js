import React from 'react';
import styled from 'styled-components';
import { number, shape } from 'prop-types';
import { Container, StyledForm } from '../Calculator/Calculator.styles';
import Input from '../../components/FormItems/Input';

const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 15;
`;
const CaloriesText = styled.Text`
  font-weight: 700;
  font-size: 18;
`;

const InputContainer = styled.View`
  width: 100%;
  padding-left: 20;
`;

const CustomizeMeal = ({
  navigation: {
    state: { params },
  },
}) => (
  <Container>
    <TextContainer>
      <CaloriesText>Suggested Calories: {params.suggestedCalories}</CaloriesText>
    </TextContainer>
    <StyledForm>
      <InputContainer>
        <Input metricLabel="Breakfast?" />
        <Input metricLabel="Lunch?" />
        <Input metricLabel="Dinner?" />
      </InputContainer>
    </StyledForm>
  </Container>
);

CustomizeMeal.displayName = 'CustomizeMealScreen';

CustomizeMeal.propTypes = {
  navigation: shape({
    state: shape({
      params: shape({
        suggestedCalories: number.isRequired,
      }),
    }),
  }),
};

export default CustomizeMeal;
