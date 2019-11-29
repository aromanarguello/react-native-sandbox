import { gql } from 'apollo-boost';

const FETCH_RECIPES = gql`
  query FetchRecipes(
    $suggestedCalories: Int!
    $breakfastMeal: String!
    $lunchMeal: String!
    $dinnerMeal: String!
  ) {
    fetchRecipes(
      suggestedCalories: $suggestedCalories
      breakfastMeal: $breakfastMeal
      lunchMeal: $lunchMeal
      dinnerMeal: $dinnerMeal
    ) {
      calories
      image
      label
      url
      serving
    }
  }
`;
export { FETCH_RECIPES };
