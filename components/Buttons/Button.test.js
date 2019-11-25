import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithTheme } from '../../utils/tests/utils';
import Button from './Button';

test('accepts title', () => {
  const { getByTestId } = renderWithTheme(<Button title="click me" />);
  const buttonNode = getByTestId('button');
  expect(buttonNode).toBeTruthy();
});

test('can click', () => {
  const mockFn = jest.fn();
  const { getByTestId } = renderWithTheme(
    <Button onSubmitHandler={mockFn} title="click me" />
  );
  const buttonNode = getByTestId('button');
  fireEvent.press(buttonNode);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
