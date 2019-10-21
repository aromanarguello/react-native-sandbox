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

const getRecipesByCalories = (
  suggestedCalories,
  { fetchRecipes: { hits } }
) => {
  const divideByFive = suggestedCalories / 5;
  let currentCalorieCount = 0;
  let currentRecipes = [];
  console.log(Math.floor(divideByFive));

  const recipe = hits.filter(
    ({ recipe: { calories } }) => calories <= suggestedCalories + 100
  );
  console.log(recipe[0]);
  while (currentCalorieCount < suggestedCalories) {
    // find/grab recipe
    // add recipe to array
    // calculate recipe minus suggeste calories
    // add another
    // repeat
  }
};

const Recipes = ({
  navigation: {
    state: { params }
  }
}) => {
  const { data, loading, error } = useQuery(FETCH_RECIPES);

  React.useEffect(() => {
    if (data) getRecipesByCalories(params.suggestedCalories, data);
  }, [data]);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>Data couldn't be fetched</Error>;

  return (
    <RecipeContext.Consumer>
      {({ suggestedCaloricIntake }) => (
        <View>
          <Text>Suggested: {suggestedCaloricIntake}</Text>

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
