import React from 'react';
import Error from './';
import {shallow} from 'enzyme';


describe('loading an Error component', ()=>{

    it('renders a gif card without crashing', () => {
        shallow(<Error error={{message:"This is an error message."}} />);
    });

});