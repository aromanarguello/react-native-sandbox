import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query FetchRecipes($suggestedCalories: Int!) {
    fetchRecipes(suggestedCalories: $suggestedCalories) {
      calories
      image
      label
    }
  }
`;
export { FETCH_RECIPES };
