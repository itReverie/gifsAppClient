import React from 'react';
import LoaderImage from './';
import {shallow, mount} from 'enzyme';

let onSearch;
let onUpdateError;

describe('displaying a loader for an image', ()=>{

    beforeEach(() => {
      onSearch=jest.fn();
      onUpdateError=jest.fn();
    });

    it('renders a search box without crashing', () => {
      let success=jest.fn();
      let failure=jest.fn();
      shallow(<LoaderImage component={onSearch} 
                           imageUrl=''
                           seconds='1000'
                           success
                           failure />);
    });



});