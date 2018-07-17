import React from 'react';
import GifsList from './';
import Star from '../star';
import {shallow, mount} from 'enzyme';
import gifsNormalized from '../../mocks/gifsNormalized';

let onAddFavorite;

describe('loading a GifList component', ()=>{

    beforeEach(() => {
        onAddFavorite=jest.fn();
    });

    it('renders a gif list component without crashing', () => {
    shallow(<GifsList gifsList={gifsNormalized}
                      onAddFavorite={onAddFavorite} />);
    });

    it('calls onAddFavorite event on add a favorite gif', () => {
        const wrapper = mount(<GifsList gifsList={gifsNormalized}
                                        onAddFavorite={onAddFavorite}/>);
        const gifListComponent=wrapper.find(GifsList);
        const star=gifListComponent.find(Star).first();
        star.simulate('click');
        expect(onAddFavorite).toHaveBeenCalledTimes(1);
    });

});