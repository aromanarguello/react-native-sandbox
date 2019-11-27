import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { element } from 'prop-types';

const theme = {
  colors: {
    darkGray: '#dee1e8',
    lightGray: '#f2f5fa',
    successGreen: '#53dd6c',
    successBlue: '#1f4188',
  },
  // font: 'Roboto',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: element.isRequired,
};

export { Theme };
