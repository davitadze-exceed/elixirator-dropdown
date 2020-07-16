import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dropdown from './index';

test('renders "dropdown"', () => {
  const { getByText } = render(<Dropdown />);
  const linkElement = getByText(/dropdown/i);
  expect(linkElement).toBeInTheDocument()
});

describe('Dropdown', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Dropdown values={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
