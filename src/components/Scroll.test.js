import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Card component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
});