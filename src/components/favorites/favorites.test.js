import React from 'react';
import Favorites from './';
import {shallow} from 'enzyme';

describe('loading a Favorites component', ()=>{

    it('renders a Favorites without crashing', () => {
        shallow(<Favorites  />);
    });
});