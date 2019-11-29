import React from 'react';
import { shape, number } from 'prop-types';
import { Linking } from 'react-native';
import { Card } from 'native-base';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_RECIPES } from '../../graphql/queries';
import Button from '../../components/Buttons/Button';
import {
  Loading,
  Error,
  Label,
  CardContent,
  Picture,
  RecipeInfo,
  CardContainer,
  InfoContainer,
} from './Recipes.styles';

const Recipes = ({
  navigation: {
    state: { params },
  },
}) => {
  const { data, loading, error } = useQuery(FETCH_RECIPES, {
    variables: {
      suggestedCalories: params.meal.suggestedCalories,
    },
  });
  const handlePress = url => {
    Linking.openURL(url);
  };

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>Data couldn't be fetched</Error>;

  const fakeData = [
    {
      calories: 590,
      label: 'gum gum fruit is the best',
      image: 'https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg',
      serving: 4,
      url: 'http://www.williams-sonoma.com/recipe/turkish-pepper-braise-with-beef.html',
    },
    {
      calories: 590,
      label: 'gum gum fruit is the best',
      image: 'https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg',
      serving: 4,
      url: 'http://www.williams-sonoma.com/recipe/turkish-pepper-braise-with-beef.html',
    },
    {
      calories: 590,
      label: 'gum gum fruit is the best',
      image: 'https://www.edamam.com/web-img/6e9/6e96ce1d53f8e221225cb26871c32674.jpg',
      serving: 4,
      url: 'http://www.williams-sonoma.com/recipe/turkish-pepper-braise-with-beef.html',
    },
  ];

  return (
    <CardContainer>
      {data.fetchRecipes.map(({ image, label, calories, serving, url }) => (
        <Card key={label}>
          <CardContent>
            <InfoContainer>
              <Label>{label}</Label>
              <RecipeInfo>Calories: {calories}</RecipeInfo>
              <RecipeInfo>Serving: {serving}</RecipeInfo>
              <Button
                title="Recipe"
                width={80}
                height={20}
                fontSize={15}
                handlerArgs={url}
                onSubmitHandler={handlePress}
              />
            </InfoContainer>
            <Picture
              style={{ width: 150, height: 150 }}
              source={{ uri: image }}
              accessibilityLabel="meal image"
            />
          </CardContent>
        </Card>
      ))}
    </CardContainer>
  );
};

Recipes.propTypes = {
  navigation: shape({
    state: shape({
      params: shape({
        meal: shape({
          suggestedCalories: number.isRequired,
        }),
      }),
    }),
  }),
};

export default Recipes;
