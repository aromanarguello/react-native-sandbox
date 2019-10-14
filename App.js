import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Input from "./components/FormItems/Input";

export default function App() {
  const [metric, setMetric] = React.useState("");
  const [courseGoals, setCourseGoals] = React.useState([]);

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  const addMetricHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: metric }
    ]);
  };

  return (
    <View style={styles.screen}>
      <Input
        metricName='weight'
        metricLabel='height'
        metric={metric.metricName}
        onChangeHandler={onChangeHandler}
        addMetricHandler={addMetricHandler}
      />
      <Input
        metricName='age'
        onChangeHandler={onChangeHandler}
        addMetricHandler={addMetricHandler}
      />
      <Input
        onChangeHandler={onChangeHandler}
        addMetricHandler={addMetricHandler}
      />
      <View>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.list}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
          style={styles.body}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#00A1E4"
  },
  headerContainer: {
    height: 80,
    borderColor: "red",
    width: "100%",
    borderWidth: 1
  },
  list: {
    padding: 10,
    backgroundColor: "lightgray",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10
  }
});
