import React from 'react';
import { object } from 'prop-types';
import {
  MetricInputContainer,
  DropdownContainer,
  HeightContainer,
  Container,
  StyledForm,
} from './Calculator.styles';
import useCalculator from '../../hooks/useCalculator';
import Input from '../../components/FormItems/Input';
import Button from '../../components/Buttons/Button';
import Dropdown from '../../components/Dropdowns/Dropdown';

const Calculator = ({ navigation }) => {
  const {
    onChangeHandler,
    metric,
    suggestedCaloricIntake,
    activityLevels,
    setMetric,
  } = useCalculator();

  const onSubmitHandler = (suggestedCalories, metric) => {
    navigation.navigate({
      routeName: 'CustomizeMeal',
      params: { suggestedCalories, metric },
    });
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
        <Button
          onSubmitHandler={() => onSubmitHandler(suggestedCaloricIntake, metric)}
          title="Next"
          width={278}
        />
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

Calculator.propTypes = {
  navigation: object,
};

export default Calculator;
