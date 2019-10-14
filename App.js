import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "./components/FormItems/Input";
import styled from "styled-components";

const HeightContainer = styled.View`
  width: 100%;
  height: 80;
  flex-direction: row;
  display: flex;
  margin-top: 15;
`;

const Label = styled.Text`
  align-items: flex-end;
`;

const LabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  height: 50;
  margin-left: 30;
`;

export default App = () => {
  const [metric, setMetric] = React.useState("");

  const onChangeHandler = ({ nativeEvent: { text } }, metricName) => {
    setMetric(current => ({ ...current, [metricName]: text }));
  };

  return (
    <View style={styles.screen}>
      <Input
        metricName='weight'
        metricLabel='Weight:'
        metric={metric.metricName}
        onChangeHandler={onChangeHandler}
      />
      <Input
        metricName='age'
        metricLabel='Age:'
        metric={metric.metricName}
        onChangeHandler={onChangeHandler}
      />
      <HeightContainer>
        <Input
          metricName='feet'
          metricLabel='Height:'
          metric={metric.metricName}
          onChangeHandler={onChangeHandler}
          width={92}
        />
        <Input
          metricLabel='  '
          metricName='inches'
          metric={metric.metricName}
          onChangeHandler={onChangeHandler}
          width={92}
        />
      </HeightContainer>
      <LabelContainer>
        <Label>feet</Label>
        <Label>inches</Label>
      </LabelContainer>
    </View>
  );
};

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
