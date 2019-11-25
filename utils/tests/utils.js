import React from "react";
import { render } from "@testing-library/react-native";
import { Theme } from "../styles/Theme";

export const renderWithTheme = ui => render(<Theme>{ui}</Theme>);
