import React from 'react';
import LoaderImage from './';
import {shallow, mount} from 'enzyme';

let onSearch;

describe('displaying a loader for an image', ()=>{

    beforeEach(() => {
      onSearch=jest.fn();
    });

    it('renders a search box without crashing', () => {
      const success=jest.fn();
      const failure=jest.fn();
      shallow(<LoaderImage component={onSearch} 
                           imageUrl=''
                           seconds='1000'
                           success
                           failure />);
    });



});