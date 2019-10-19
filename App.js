import React from "react";
import Navigator from "./navigation/Navigation";
import { RecipeContextProvider } from "./context/RecipeContext";
export default App = () => {
  return (
    <RecipeContextProvider>
      <Navigator />
    </RecipeContextProvider>
  );
};
