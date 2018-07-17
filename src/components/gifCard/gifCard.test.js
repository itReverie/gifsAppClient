import React from 'react';
import GifCard from './';
import Star from '../star';
import {shallow, mount} from 'enzyme';
import gif from '../../mocks/gif';

let onAddFavorite;

describe('loading a GifCard component', ()=>{

    beforeEach(() => {
        onAddFavorite=jest.fn();
    });
    it('renders a gif card without crashing', () => {
    shallow(<GifCard  key={gif.id}
                        gif={gif}
                        onAddFavorite={onAddFavorite} />);
    });
    it('calls onAddFavorite event on add a favorite gif', () => {
        const wrapper = mount(<GifCard key={gif.id}
                                       gif={gif}
                                       onAddFavorite={onAddFavorite}/>);
        const gifListComponent=wrapper.find(GifCard);
        const star=gifListComponent.find(Star).first();
        star.simulate('click');
        expect(onAddFavorite).toHaveBeenCalledTimes(1);
    });
});