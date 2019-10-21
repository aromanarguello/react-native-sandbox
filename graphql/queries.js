import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query {
    fetchRecipes(calories: "500", meal: "bacon")
  }
`;
export { FETCH_RECIPES };
