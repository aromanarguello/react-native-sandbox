import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { FETCH_RECIPES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Loading = styled.Text``;

const Error = styled.Text`
  color: red;
  align-self: center;
`;

const Picture = styled.Image``;

const getRecipesByCalories = (suggestedCalories, { fetchRecipes }) => {
  let currentRecipes = [];
  let currentCalorieCount = 0;
  const divideByFive = suggestedCalories / 5;
  const recipe = fetchRecipes.filter(
    ({ calories }) => calories <= divideByFive
  );
  for (
    currentCalorieCount;
    currentCalorieCount < suggestedCalories;
    currentCalorieCount += recipe[0].calories
  ) {
    currentRecipes.push(recipe[0]);
  }
  return currentRecipes;
};

const Recipes = ({
  navigation: {
    state: { params }
  }
}) => {
  const { data, loading, error } = useQuery(FETCH_RECIPES);

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>Data couldn't be fetched</Error>;

  const recipes = getRecipesByCalories(params.suggestedCalories, data);

  console.log(recipes);

  return (
    <View>
      {recipes.map(({ image, label }, i) => (
        <View key={i}>
          <Text>{label}</Text>
          <Picture
            style={{ width: 150, height: 150 }}
            source={{ uri: image }}
            accessibilityLabel='meal image'
          />
        </View>
      ))}
    </View>
  );
};

export default Recipes;
