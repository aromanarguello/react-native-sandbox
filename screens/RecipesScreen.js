import React from "react";
import { View, Text } from "react-native";

const Recipes = props => {
  console.log(props.navigation.state);
  return (
    <View>
      <Text>
        Suggested: {props.navigation.state.params.suggestedCaloricIntake}
      </Text>
    </View>
  );
};

export default Recipes;
