import React from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import Input from "../components/FormItems/Input";
import Button from "../components/Buttons/Button";
import Dropdown from "../components/Dropdowns/Dropdown";

const Calculator = ({ navigation }) => {
  const onSubmitHandler = () => {
    navigation.navigate({
      routeName: "Recipes"
    });
  };

  return (
    <RecipeContext.Consumer>
      {({
        metric,
        onChangeHandler,
        isShowingDropdown,
        setIsShowingDropdown,
        activityLevels,
        setMetric
      }) => (
        <>
          <Input
            metricName='weight'
            placeholder='...'
            metricLabel='Weight: (lbs)'
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
          />
          <Input
            metricName='age'
            placeholder='...'
            metricLabel='Age:'
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
          />
          <HeightContainer>
            <Input
              metricName='feet'
              placeholder='feet'
              metricLabel='Height:'
              metric={metric.metricName}
              onChangeHandler={onChangeHandler}
              width={92}
            />
            <Input
              metricLabel='  '
              metricName='inches'
              placeholder='inches'
              metric={metric.metricName}
              onChangeHandler={onChangeHandler}
              width={92}
            />
          </HeightContainer>
          <LabelContainer></LabelContainer>
          <Text onPress={() => setIsShowingDropdown(!isShowingDropdown)}>
            Activity level: {activityLevels[0].level}
          </Text>
          {isShowingDropdown ? (
            <DropdownContainer>
              <Dropdown
                activityLevels={activityLevels}
                metric={metric}
                setMetric={setMetric}
              />
            </DropdownContainer>
          ) : null}
          <Button
            onSubmitHandler={onSubmitHandler}
            title='Submit'
            width={278}
          />
        </>
      )}
    </RecipeContext.Consumer>
  );
};

export default Calculator;

const Text = styled.Text`
  margin-left: 10;
  color: blue;
`;
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

const LabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  height: 50;
  margin-left: 30;
`;
