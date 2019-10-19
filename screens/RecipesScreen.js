import React from "react";
import { View, Text } from "react-native";
import { RecipeContext } from "../context/RecipeContext";

const Recipes = props => {
  return (
    <RecipeContext.Consumer>
      {({ suggestedCaloricIntake }) => (
        <View>
          <Text>Suggested: {suggestedCaloricIntake}</Text>
        </View>
      )}
    </RecipeContext.Consumer>
  );
};

export default Recipes;
