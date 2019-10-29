import React from "react";
import {
  Loading,
  Error,
  CardContent,
  Picture,
  Label,
  Calories,
  CardContainer,
  InfoContainer
} from "./Recipes.styles";
import { Card } from "native-base";
import { FETCH_RECIPES } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Recipes = ({
  navigation: {
    state: { params }
  }
}) => {
  const { data, loading, error } = useQuery(FETCH_RECIPES, {
    variables: {
      suggestedCalories: params.suggestedCalories
    }
  });

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>Data couldn't be fetched</Error>;

  const fakeData = [
    {
      calories: 590,
      label: "gum gum fruit is the best",
      image:
        "https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg"
    },
    {
      calories: 590,
      label: "gum gum fruit is the best",
      image:
        "https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg"
    },
    {
      calories: 590,
      label: "gum gum fruit is the best",
      image:
        "https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg"
    }
  ];

  return (
    <CardContainer>
      {data.fetchRecipes.map(({ image, label, calories }, i) => (
        <Card key={i}>
          <CardContent>
            <InfoContainer>
              <Label>{label}</Label>
              <Calories>Calories: {calories}</Calories>
            </InfoContainer>
            <Picture
              style={{ width: 150, height: 150 }}
              source={{ uri: image }}
              accessibilityLabel='meal image'
            />
          </CardContent>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Recipes;