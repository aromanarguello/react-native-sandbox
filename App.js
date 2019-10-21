import React from "react";
import Navigator from "./navigation/Navigation";
import { RecipeContextProvider } from "./context/RecipeContext";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  cache,
  link
});

export default App = () => {
  return (
    <RecipeContextProvider>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </RecipeContextProvider>
  );
};
