import React from 'react';
import { MetricInputContainer, DropdownContainer, HeightContainer, Container, StyledForm } from './Calculator.styles';
import Input from '../../components/FormItems/Input';
import Button from '../../components/Buttons/Button';
import Dropdown from '../../components/Dropdowns/Dropdown';
// import ViewBanner from "../../components/Banners/ViewBanner";

const activityLevels = [
  // { level: "Basal Metabolic Rate (BMR)", multiplier: 1 },
  { level: 'Sedentary: little or no exercise', multiplier: 1.2 },
  { level: 'Light: exercise 1-3 times/week', multiplier: 1.375 },
  { level: 'Moderate: exercise 3-5 times/week', multiplier: 1.55 },
  { level: 'Very Active: intese exercise 6-7 times/week', multiplier: 1.725 },
  {
    level: 'Extra Active: very intense exercise daily, or physical job',
    multiplier: 1.9,
  },
];

const Calculator = ({ navigation }) => {
  const [suggestedCaloricIntake, setCaloricIntake] = React.useState();
  const [metric, setMetric] = React.useState({
    activityLevel: activityLevels[0].multiplier,
  });

  React.useEffect(() => {
    setCaloricIntake(calculateCalorieIntake('men'));
  }, [Object.keys(metric).length === 5, metric.activityLevel]);

  const onSubmitHandler = (suggestedCalories, metric) => {
    navigation.navigate({
      routeName: 'CustomizeMeal',
      params: { suggestedCalories, metric },
    });
  };

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  const calculateCalorieIntake = gender => {
    const totalInches = Number(metric.feet) * 12 + Number(metric.inches);
    const formulas = {
      men: 66 + 6.23 * Number(metric.weight) + 12.7 * totalInches - 6.8 * Number(metric.age),
      women: 655 + 4.35 * Number(metric.weight) + 4.7 * totalInches - 4.7 * Number(metric.age),
    };
    return Math.floor(formulas[gender] * metric.activityLevel);
  };

  return (
    <Container scrollEnabled="false">
      <StyledForm>
        <MetricInputContainer>
          <Input
            metricName="weight"
            metricLabel="How much do you weight?"
            metric={metric.metricName}
            placeholder="lbs"
            keyboardType="numeric"
            returnKeyType="next"
            onChangeHandler={onChangeHandler}
            width={300}
          />
          <Input
            metricName="age"
            placeholder="..."
            keyboardType="numeric"
            metricLabel="Age"
            returnKeyType="next"
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
            width={300}
          />
        </MetricInputContainer>
        <HeightContainer>
          <Input
            metricName="feet"
            keyboardType="numeric"
            placeholder="feet"
            metricLabel="Height"
            returnKeyType="next"
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
            width={92}
          />
          <Input
            metricLabel="  "
            keyboardType="numeric"
            metricName="inches"
            placeholder="inches"
            returnKeyType="next"
            metric={metric.metricName}
            onChangeHandler={onChangeHandler}
            width={92}
          />
        </HeightContainer>
        <DropdownContainer>
          <Dropdown activityLevels={activityLevels} metric={metric} setMetric={setMetric} />
        </DropdownContainer>
        <Button onSubmitHandler={() => onSubmitHandler(suggestedCaloricIntake, metric)} title="Next" width={278} />
      </StyledForm>
    </Container>
  );
};

Calculator.navigationOptions = {
  headerTitle: 'prepi',
  headerStyle: {
    backgroundColor: '#f2f5fa',
    borderBottom: 'none',
  },
  headerTintColor: '#1f4188',
};

export default Calculator;
