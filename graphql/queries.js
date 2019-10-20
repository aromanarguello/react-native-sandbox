import { gql } from "apollo-boost";

const FETCH_RECIPES = gql`
  query {
    fetchRecipes(calories: "500", meal: "beef")
  }
`;

export { FETCH_RECIPES };
