import React from 'react';
import SearchBox from './';
import SearchButton from '../searchButton/';
import {shallow, mount} from 'enzyme';

let onSearch;
let onUpdateError;

describe('loading a SearchBox component', ()=>{

    beforeEach(() => {
      onSearch=jest.fn();
      onUpdateError=jest.fn();
    });

    it('renders a search box without crashing', () => {
      shallow(<SearchBox  onSearch={onSearch} 
                          onUpdateError={onUpdateError}/>);
    });

    it('calls onClick event on click of search box', () => {
      const wrapper = mount(<SearchBox  onSearch={onSearch} 
                                        onUpdateError={onUpdateError} />);
      const input=wrapper.find('input');
      input.instance().value = "smile";
      input.simulate('change');

      const button=wrapper.find(SearchButton);
      button.simulate('click');
      
      expect.assertions(4);
      expect(input.instance().value).toBe('smile');
      expect(wrapper.state(`searchTerm`)).toBe('smile');
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch).toBeCalledWith('smile');
    });

});