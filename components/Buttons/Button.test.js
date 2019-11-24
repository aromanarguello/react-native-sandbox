import React from "react";
import { render } from "@testing-library/react-native";
import Button from "./Button";
import { Theme } from "../../utils/styles/Theme";

test("accepts title", () => {
  const comp = render(
    <Theme>
      <Button title="click me" />
    </Theme>
  );
  console.log(comp);
});
