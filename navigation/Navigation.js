import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Calculator from "../screens/Calculator/Calculator.screen";
import Recipes from "../screens/Recipes/Recipes.screen";
// import { createTabsNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

const RecipesNavigator = createStackNavigator({
  Calculator,
  Recipes
});

export default createAppContainer(RecipesNavigator);
