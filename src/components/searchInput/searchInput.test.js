import React from 'react';
import SearchInput from './';
import {shallow, mount} from 'enzyme';

let onSearchTextChange = jest.fn();
let onSearch = jest.fn();

describe('loading a SearchInput component', ()=>{

    beforeEach(() => {
      onSearchTextChange=jest.fn();
      onSearch=jest.fn();
    });

    it('renders a search button without crashing', () => {
      shallow(<SearchInput onSearchTextChange={onSearchTextChange}
                           onSearch={onSearch} />);
    });

    it('assigns a value on input', () => {
      const wrapper = mount(<SearchInput onSearchTextChange={onSearchTextChange}
                                         onSearch={onSearch}/>);
      const input=wrapper.find('input');
      input.instance().value='smile'
      expect(input.instance().value).toBe('smile');
    });

    it('calls onChange event on the search input', () => { 
      const wrapper = mount(<SearchInput onSearchTextChange={onSearchTextChange}
                                         onSearch={onSearch}/>);
      const input=wrapper.find('input');
      input.simulate('change');
      expect(onSearchTextChange).toHaveBeenCalledTimes(1);
    });

    it('calls onSearch event on the key press for enter', () => { 
      const wrapper = mount(<SearchInput onSearchTextChange={onSearchTextChange}
                                         onSearch={onSearch}/>);
      const input=wrapper.find('input');
      input.simulate('keypress', {key: 'Enter'});
      expect(onSearch).toHaveBeenCalledTimes(1);
    });

});