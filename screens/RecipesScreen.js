import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { FETCH_RECIPES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { RecipeContext } from "../context/RecipeContext";

const Loading = styled.Text``;

const Error = styled.Text`
  color: red;
  align-self: center;
`;

const Picture = styled.Image``;

const Recipes = () => {
  const { data, loading, error } = useQuery(FETCH_RECIPES, {
    variables: { calories: 500, meal: "beef" }
  });
  console.log(data);
  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>Data couldn't be fetched</Error>;
  return (
    <RecipeContext.Consumer>
      {({ suggestedCaloricIntake }) => (
        <View>
          <Text>Suggested: {suggestedCaloricIntake}</Text>
          <Text>{data.fetchRecipes.hits[0].recipe.label}</Text>
          <Picture
            style={{ width: 150, height: 150 }}
            source={{ uri: data.fetchRecipes.hits[0].recipe.image }}
            accessibilityLabel='meal image'
          />
        </View>
      )}
    </RecipeContext.Consumer>
  );
};

export default Recipes;
