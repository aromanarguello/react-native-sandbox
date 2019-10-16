import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorScreen from "../screens/CalculatorScreen";
// import { createTabsNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

const RecipesNavigator = createStackNavigator({
  Calculator: CalculatorScreen
});

export default createAppContainer(RecipesNavigator);
