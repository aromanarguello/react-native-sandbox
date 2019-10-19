import React from "react";
import { View, Text } from "react-native";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { RecipeContext } from "../context/RecipeContext";

const FETCH_RECIPES = gql`
  {
    fetchRecipes(calories: 500, meal: "beef")
  }
`;

const Recipes = () => {
  const { data } = useQuery(FETCH_RECIPES);
  console.log(data);
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
