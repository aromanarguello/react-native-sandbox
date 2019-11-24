import React from "react";
import { render } from "@testing-library/react-native";
import Button from "./Button";

test("accepts title", () => {
  const comp = render(<Button title="click me" />);
  console.log(comp);
});
