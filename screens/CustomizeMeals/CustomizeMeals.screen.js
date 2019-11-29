import React from 'react';
import styled from 'styled-components';
import { number, shape, string } from 'prop-types';
import { Container, StyledForm, ButtonContainer } from '../Calculator/Calculator.styles';
import useCalculator from '../../hooks/useCalculator';
import { Input, Button } from '../../components';

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
    navigate,
    state: { params },
  },
}) => {
  /**
   * submit button handler
   * @param {string} meal
   */
  const onSubmitHandler = meal => {
    navigate({
      routeName: 'Recipes',
      params: { meal },
    });
  };
  console.log(params);
  const { metric, onChangeHandler } = useCalculator();
  return (
    <Container>
      <TextContainer>
        {/* <CaloriesText>Suggested Calories: {params.suggestedCalories}</CaloriesText> */}
        <CaloriesText>Suggested Calories: 2500</CaloriesText>
      </TextContainer>
      <StyledForm>
        <InputContainer>
          <Input
            metricLabel="Breakfast?"
            metricName="breakfast"
            metric={metric.name}
            placeholder="i.e omelette"
            returnKeyType="next"
            width={300}
            onChangeHandler={onChangeHandler}
          />
          <Input
            metricLabel="Lunch?"
            metricName="lunch"
            metric={metric.name}
            placeholder="i.e chicken"
            returnKeyType="next"
            width={300}
            onChangeHandler={onChangeHandler}
          />
          <Input
            metricLabel="Dinner?"
            metricName="dinner"
            metric={metric.name}
            placeholder="i.e steak"
            returnKeyType="next"
            width={300}
            onChangeHandler={onChangeHandler}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            onSubmitHandler={() => onSubmitHandler({ ...params, individualMeal: metric })}
            title="Next"
          />
        </ButtonContainer>
      </StyledForm>
    </Container>
  );
};

CustomizeMeal.displayName = 'CustomizeMealScreen';

CustomizeMeal.propTypes = {
  navigation: shape({
    state: shape({
      params: shape({
        suggestedCalories: number.isRequired,
        metric: shape({
          activityLevel: number.isRequired,
          age: string.isRequired,
          feet: string.isRequired,
          inches: string.isRequired,
          weight: string.isRequired,
        }),
      }),
    }),
  }),
};

export default CustomizeMeal;
