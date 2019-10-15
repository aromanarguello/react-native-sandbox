import React from "react";
import Input from "./components/FormItems/Input";
import Button from "./components/Buttons/Button";

import styled from "styled-components";

const Screen = styled.View`
  padding-top: 50;
  height: 100%;
  flex-direction: column;
  background-color: #00a1e4;
`;

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

  const onSubmitHandler = () => console.log(metric);

  return (
    <Screen>
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
      <Button onSubmitHandler={onSubmitHandler} title='Submit' width={278} />
    </Screen>
  );
};
