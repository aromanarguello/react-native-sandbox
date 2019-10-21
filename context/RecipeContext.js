import React from "react";

const RecipeContext = React.createContext({});

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

const RecipeContextProvider = ({ children }) => {
  const [isShowingDropdown, setIsShowingDropdown] = React.useState(false);
  const [suggestedCaloricIntake, setCaloricIntake] = React.useState();
  const [metric, setMetric] = React.useState({
    activityLevel: activityLevels[0].multiplier
  });

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  React.useEffect(() => {
    setCaloricIntake(calculateCalorieIntake("men"));
  }, [Object.keys(metric).length === 5, metric.activityLevel]);

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
    <RecipeContext.Provider
      value={{
        metric,
        setMetric,
        isShowingDropdown,
        setIsShowingDropdown,
        onChangeHandler,
        suggestedCaloricIntake,
        activityLevels
      }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContextProvider, RecipeContext };
