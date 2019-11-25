import React from "react";
import { renderWithTheme } from "../../utils/tests/utils";
import Button from "./Button";

test("accepts title", () => {
  const { getByTestId, ...rest } = renderWithTheme(<Button title="click me" />);
  console.log(rest);
  const buttonNode = getByTestId("button");
  console.log(buttonNode.child);
  expect(buttonNode).toBeTruthy();
});
