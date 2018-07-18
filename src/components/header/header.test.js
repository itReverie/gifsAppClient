import React from 'react';
import Header from './';
import {shallow, mount} from 'enzyme';
import Favorites from '../favorites';
import { StyledIconBack } from './header.style';
import { BrowserRouter } from 'react-router-dom';



describe('loading a Header component', ()=>{

    it('renders a Header without crashing', () => {
        shallow(<Header  />);
    });

    it('renders a Header with back button and not favorites', () => {
        const wrapper = mount(<BrowserRouter>
                                <Header  isFavorites={true} />
                             </BrowserRouter>);
        const iconFavorites=wrapper.find(Favorites);
        const iconBack=wrapper.find(StyledIconBack);
        expect.assertions(2);
        expect(iconFavorites.length).toEqual(0);
        expect(iconBack.length).toEqual(1);

    });

    it('renders a Header with favorites icon and not back button', () => {
        const wrapper = mount(<BrowserRouter>
                                <Header  isFavorites={false} />
                             </BrowserRouter>);
        const iconFavorites=wrapper.find(Favorites);
        const iconBack=wrapper.find(StyledIconBack);
        expect.assertions(2);
        expect(iconFavorites.length).toEqual(1);
        expect(iconBack.length).toEqual(0);

    });
});