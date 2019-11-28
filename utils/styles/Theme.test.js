import React from 'react';
import { render } from '@testing-library/react-native';
import { Theme } from './Theme';
import Button from '../../components/Buttons/Button';

test('can render children', () => {
  const { getByTestId } = render(
    <Theme>
      <Button title="click me" />
    </Theme>
  );
  const buttonNode = getByTestId('button');
  expect(buttonNode.props.children).toMatch('click me');
});
