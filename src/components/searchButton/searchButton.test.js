import React from 'react';
import SearchButton from './';
import {shallow, mount} from 'enzyme';

let onSearch;

describe('loading a SearchButton component', ()=>{

    beforeEach(() => {
      onSearch=jest.fn();
    });

    it('renders a search button without crashing', () => {
      shallow(<SearchButton text="Search" onSearch={onSearch}/>);
    });

    it('calls onChange event on the search input', () => {
      const wrapper = mount(<SearchButton  text="Search" onSearch={onSearch}/>);
      const button=wrapper.find(SearchButton);
      button.simulate('click');
      expect(onSearch).toHaveBeenCalledTimes(1);
    });
});