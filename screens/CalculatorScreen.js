import React from "react";
import styled from "styled-components";
import Input from "../components/FormItems/Input";
import Button from "../components/Buttons/Button";
import Dropdown from "../components/Dropdowns/Dropdown";

const activityLevels = [
  // { level: "Basal Metabolic Rate (BMR)", multiplier: 1 },
  { level: "Sedentary: little or no exercise", multiplier: 1.2 },
  { level: "Light: exercise 1-3 times/week", multiplier: 1.375 },
  { level: "Moderate: exercise 3-5 times/week", multiplier: 1.55 },
  { level: "Very Active: intese exercise 6-7 times/week", multiplier: 1.725 },
  {
    level: "Extra Active: very intense exercise daily, or physical job",
    multiplier: 1.9
  }
];

const Calculator = ({ navigation }) => {
  const [metric, setMetric] = React.useState({
    activityLevel: activityLevels[0].multiplier
  });

  const [isShowingDropdown, setIsShowingDropdown] = React.useState(false);
  const [suggestedCaloricIntake, setCaloricIntake] = React.useState();

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  React.useEffect(() => {
    setCaloricIntake(calculateCalorieIntake("men"));
  }, [Object.keys(metric).length === 5, metric.activityLevel]);

  const onSubmitHandler = () => {
    calculateCalorieIntake();
    if (Object.keys(metric).length === 5) {
      navigation.navigate({
        routeName: "Recipes",
        params: { suggestedCaloricIntake }
      });
    }
  };

  const calculateCalorieIntake = gender => {
    const totalInches = Number(metric.feet) * 12 + Number(metric.inches);
    const formulas = {
      men:
        66 +
        6.23 * Number(metric.weight) +
        12.7 * totalInches -
        6.8 * Number(metric.age),
      women:
        655 +
        4.35 * Number(metric.weight) +
        4.7 * totalInches -
        4.7 * Number(metric.age)
    };
    return Math.floor(formulas[gender] * metric.activityLevel);
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
      <Button onSubmitHandler={onSubmitHandler} title='Submit' width={278} />
    </>
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
