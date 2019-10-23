import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query FetchRecipes($suggestedCalories: Int!) {
    fetchRecipes(suggestedCalories: $suggestedCalories) {
      calories
      label
      image
    }
  }
`;
export { FETCH_RECIPES };
