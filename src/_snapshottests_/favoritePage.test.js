import React from 'react';
import FavoritePage from '../pages/favoritePage';
import renderer from 'react-test-renderer';
import gifsNormalized from '../mocks/gifsNormalized';
import {BrowserRouter} from 'react-router-dom';


it('rendering correctly a list of favorite gifs page via snapshot', () => {
  const onAddFavorite=jest.fn();

  const tree = renderer
    .create(<BrowserRouter><FavoritePage favoriteGifs={gifsNormalized}
                                         onAddFavorite={onAddFavorite} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});