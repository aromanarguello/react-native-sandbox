import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Theme } from './Theme';

// TODO: figure out why theme object is empty in SC
const StyledText = styled(Text)``;
const TestComponent = () => <StyledText testID="test">Hello</StyledText>;

test('can render children', () => {
  const { getByTestId } = render(
    <Theme>
      <TestComponent />
    </Theme>
  );
  const {
    props: { children },
  } = getByTestId('test');
  expect(children).toMatch('Hello');
});
