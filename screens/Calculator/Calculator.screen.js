import React from "react";
import { RecipeContext } from "../../context/RecipeContext";
import {
  MetricInputContainer,
  DropdownContainer,
  HeightContainer,
  Container,
  StyledForm
} from "./Calculator.styles";
import Input from "../../components/FormItems/Input";
import Button from "../../components/Buttons/Button";
import Dropdown from "../../components/Dropdowns/Dropdown";
import ViewBanner from "../../components/Banners/ViewBanner/ViewBanner";
// import ViewBanner from "../../components/Banners/ViewBanner";

const Calculator = ({ navigation }) => {
  const onSubmitHandler = (suggestedCalories, metric) => {
    navigation.navigate({
      routeName: "CustomizeMeal",
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
      }) =>
        suggestedCaloricIntake !== "NaN" ? (
          <Container scrollEnabled="false">
            <StyledForm>
              <MetricInputContainer>
                <Input
                  metricName="weight"
                  placeholder="..."
                  metricLabel="Weight(lbs)"
                  metric={metric.metricName}
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
                <Dropdown
                  activityLevels={activityLevels}
                  metric={metric}
                  setMetric={setMetric}
                  setIsShowingDropdown={setIsShowingDropdown}
                />
              </DropdownContainer>
              <Button
                onSubmitHandler={
                  () => {}
                  // onSubmitHandler(suggestedCaloricIntake, metric)
                }
                title="Next"
                width={278}
              />
            </StyledForm>
          </Container>
        ) : (
          <ViewBanner />
        )
      }
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
