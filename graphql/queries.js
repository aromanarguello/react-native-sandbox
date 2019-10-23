import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query FetchRecipes(
    $calories: String!
    $meal: String!
    $suggestedCalories: Int!
  ) {
    fetchRecipes(
      calories: $calories
      meal: $meal
      suggestedCalories: $suggestedCalories
    ) {
      calories
      label
      image
    }
  }
`;
export { FETCH_RECIPES };
