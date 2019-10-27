import React from "react";
import { ToucableWithoutFeedback, Keyboard } from "react-native";
import { RecipeContext } from "../context/RecipeContext";
import { Form } from "native-base";
import styled from "styled-components";
import Input from "../components/FormItems/Input";
import Button from "../components/Buttons/Button";
import Dropdown from "../components/Dropdowns/Dropdown";

const Calculator = ({ navigation }) => {
  const onSubmitHandler = (suggestedCalories, metric) => {
    navigation.navigate({
      routeName: "Recipes",
      params: { suggestedCalories, metric }
    });
  };
  const DismissKeyboard = ({ children }) => (
    <ToucableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </ToucableWithoutFeedback>
  );

  return (
    <RecipeContext.Consumer>
      {({
        metric,
        onChangeHandler,
        isShowingDropdown,
        setIsShowingDropdown,
        activityLevels,
        setMetric,
        suggestedCaloricIntake
      }) => (
        <Form>
          <Input
            metricName='weight'
            placeholder='...'
            metricLabel='Weight: (lbs)'
            metric={metric.metricName}
            keyboardType='numeric'
            returnKeyType='next'
            onChangeHandler={onChangeHandler}
          />
          <Input
            metricName='age'
            placeholder='...'
            keyboardType='numeric'
            metricLabel='Age:'
            returnKeyType='next'
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
          />
          <HeightContainer>
            <Input
              metricName='feet'
              keyboardType='numeric'
              placeholder='feet'
              metricLabel='Height:'
              returnKeyType='next'
              metric={metric.metricName}
              onChangeHandler={onChangeHandler}
              width={92}
            />
            <Input
              metricLabel='  '
              keyboardType='numeric'
              metricName='inches'
              placeholder='inches'
              returnKeyType='next'
              metric={metric.metricName}
              onChangeHandler={onChangeHandler}
              width={92}
            />
          </HeightContainer>
          <DropdownContainer>
            <Dropdown
              activityLevels={activityLevels}
              metric={metric}
              setMetric={setMetric}
              setIsShowingDropdown={setIsShowingDropdown}
            />
          </DropdownContainer>
          <Button
            onSubmitHandler={() =>
              onSubmitHandler(suggestedCaloricIntake, metric)
            }
            title='Submit'
            width={278}
          />
        </Form>
      )}
    </RecipeContext.Consumer>
  );
};

export default Calculator;

const DropdownContainer = styled.View`
  width: 100%;
  height: 100;
  margin-top: 45;
  justify-content: center;
`;

const HeightContainer = styled.View`
  width: 100%;
  height: 80;
  flex-direction: row;
  display: flex;
  margin-top: 15;
  margin-bottom: 15;
`;
