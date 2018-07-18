import React from 'react';
import Footer from './';
import {shallow} from 'enzyme';

describe('loading a Footer component', ()=>{

    it('renders a Footer without crashing', () => {
        shallow(<Footer  />);
    });
});