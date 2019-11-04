import React from "react";
import { ScrollView } from "react-native";
import { RecipeContext } from "../../context/RecipeContext";
import { Form } from "native-base";
import styled from "styled-components";
import Input from "../../components/FormItems/Input";
import Button from "../../components/Buttons/Button";
import Dropdown from "../../components/Dropdowns/Dropdown";

const Calculator = ({ navigation }) => {
  const onSubmitHandler = (suggestedCalories, metric) => {
    navigation.navigate({
      routeName: "Recipes",
      params: { suggestedCalories, metric }
    });
  };

  return (
    <RecipeContext.Consumer>
      {({
        metric,
        onChangeHandler,
        setIsShowingDropdown,
        activityLevels,
        setMetric,
        suggestedCaloricIntake
      }) => (
        <Container scrollEnabled='false'>
          <StyledForm>
            <MetricInputContainer>
              <Input
                metricName='weight'
                placeholder='...'
                metricLabel='Weight(lbs)'
                metric={metric.metricName}
                keyboardType='numeric'
                returnKeyType='next'
                onChangeHandler={onChangeHandler}
                width={300}
              />
              <Input
                metricName='age'
                placeholder='...'
                keyboardType='numeric'
                metricLabel='Age'
                returnKeyType='next'
                metric={metric.metricName}
                onChangeHandler={onChangeHandler}
                width={300}
              />
            </MetricInputContainer>
            <HeightContainer>
              <Input
                metricName='feet'
                keyboardType='numeric'
                placeholder='feet'
                metricLabel='Height'
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
          </StyledForm>
        </Container>
      )}
    </RecipeContext.Consumer>
  );
};

Calculator.navigationOptions = {
  headerTitle: "prepi",
  headerStyle: {
    backgroundColor: "#f2f5fa",
    borderBottom: "none"
  },
  headerTintColor: "#1f4188"
};

export default Calculator;

const MetricInputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 200;
`;

const DropdownContainer = styled.View`
  width: 100%;
  height: 100;
  margin-top: 45;
  align-items: center;
`;

const HeightContainer = styled.View`
  width: 100%;
  height: 100;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 15;
  padding-left: 55;
  margin-bottom: 15;
`;

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  height: 100%;
`;

const StyledForm = styled(Form)`
  flex: 1;
`;
