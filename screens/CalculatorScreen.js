import React from "react";
import styled from "styled-components";
import Input from "../components/FormItems/Input";
import Button from "../components/Buttons/Button";
import Dropdown from "../components/Dropdowns/Dropdown";

const activityLevels = [
  { level: "Basal Metabolic Rate (BMR)" },
  { level: "Ledentary: little or no exercise" },
  { level: "Light: exercise 1-3 times/week" },
  { level: "Moderate: exercise 4-5 times/week" },
  { level: "Active: daily exercise or intense exercise 3-4 times/week" },
  { level: "Very Active: intese exercise 6-7 times/week" },
  { level: "Extra Active: very intense exercise daily, or physical job" }
];

const Calculator = ({ navigation }) => {
  const [metric, setMetric] = React.useState({});

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  const onSubmitHandler = () => {
    if (Object.keys(metric).length === 5) {
      navigation.navigate({ routeName: "Recipes" });
    }
  };

  return (
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
          placeholder='...'
          metricLabel='Height:'
          metric={metric.metricName}
          onChangeHandler={onChangeHandler}
          width={92}
        />
        <Input
          metricLabel='  '
          metricName='inches'
          placeholder='...'
          metric={metric.metricName}
          onChangeHandler={onChangeHandler}
          width={92}
        />
      </HeightContainer>
      <LabelContainer>
        <Label>feet</Label>
        <Label>inches</Label>
      </LabelContainer>
      <DropdownContainer>
        <Dropdown activityLevels={activityLevels} />
      </DropdownContainer>
      <Button onSubmitHandler={onSubmitHandler} title='Submit' width={278} />
    </>
  );
};

export default Calculator;

const DropdownContainer = styled.View`
  width: 100%;
  height: 100;
  margin-top: 35;
  justify-content: center;
`;

const HeightContainer = styled.View`
  width: 100%;
  height: 80;
  flex-direction: row;
  display: flex;
  margin-top: 15;
`;

const Label = styled.Text`
  align-items: flex-end;
`;

const LabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  height: 50;
  margin-left: 30;
`;
