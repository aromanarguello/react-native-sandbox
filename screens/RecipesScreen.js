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

const Recipes = ({
  navigation: {
    state: { params }
  }
}) => {
  console.log(params);
  const { data, loading, error } = useQuery(FETCH_RECIPES, {
    variables: {
      suggestedCalories: params.suggestedCalories
    }
  });

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>Data couldn't be fetched</Error>;
  console.log(data);
  return (
    <View>
      {data.fetchRecipes.map(({ image, label }, i) => (
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
