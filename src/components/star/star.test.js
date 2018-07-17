import React from 'react';
import Star from './';
import {shallow, mount} from 'enzyme';

let onClick;

describe('loading a Star component', ()=>{

    beforeEach(() => {
      onClick=jest.fn();
    });

    it('renders a star without crashing', () => {
      shallow(<Star onClick={onClick}/>);
    });
    
    it('renders an active star', () => {
        const wrapper = mount(<Star active={true} onClick={onClick}/>);
        const image=wrapper.find('img');
        expect(image.instance().src).toContain('starActive.svg');
    });
    
    it('renders an inactive star', () => {
        const wrapper = mount(<Star active={false} onClick={onClick}/>);
        const image=wrapper.find('img');
        expect(image.instance().src).toContain('starInactive.svg');
    });
    
    it('calls onClick event to pass from inactive to active', () => {
        expect.assertions(2);
    
        const wrapper = mount(<Star active={false} onClick={onClick}/>);
        const image=wrapper.find('img');
        image.simulate('click');
    
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toBeCalledWith(true);
    });
    
    it('calls onClick event to pass from active to inactive', () => {
        expect.assertions(2);
    
        const wrapper = mount(<Star active={true} onClick={onClick}/>);
        const image=wrapper.find('img');
        image.simulate('click');
      
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toBeCalledWith(false);
    });
});