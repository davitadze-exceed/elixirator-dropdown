import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Dropdown from './index';

configure({ adapter: new Adapter() });

const prop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const wrapper = shallow(<Dropdown values={prop} />);

const simulationHandler = (element, action, extra) => {
   wrapper.find(element).at(0).simulate(action, extra);
};

test('renders "dropdown"', () => {
   const { getByText } = render(<Dropdown />);
   const linkElement = getByText(/dropdown/i);
   expect(linkElement).toBeInTheDocument();
});

describe('Dropdown', () => {
   test('snapshot renders', () => {
      const component = renderer.create(<Dropdown values={[]} />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
   });
   it('contains dropdown button', () => {
      expect(wrapper.find('button').length).toEqual(1);
   });
   it('renderes options', () => {
      simulationHandler('button', 'click');
      expect(wrapper.find('.dropdown-option').length).toEqual(prop.length);
   });
   it('hides paragraphs', () => {
      simulationHandler('button', 'click');
      expect(wrapper.find('.dropdown-option').length).toEqual(0);
   });
   it('hides paragraphs', () => {
      simulationHandler('button', 'click');
      simulationHandler('.dropdown-option', 'click');
      expect(wrapper.find('.dropdown-option').length).toEqual(0);
   });
   it('shows data on the button', () => {
      simulationHandler('button', 'click');
      simulationHandler('.dropdown-option', 'click');
      expect(wrapper.find('.dropdown-option').length).toEqual(0);
      expect(wrapper.find('button').text()).toEqual(prop[0].toString());
   });
   it('rerenders filtered data on input change', () => {
      simulationHandler('button', 'click');
      simulationHandler('input', 'change', { target: { value: '1' } });
      expect(wrapper.find('.dropdown-option').length).toEqual(2);
   });
});
