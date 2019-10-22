import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query {
    fetchRecipes(calories: "500", meal: "bacon") {
      calories
      label
      image
    }
  }
`;
export { FETCH_RECIPES };
