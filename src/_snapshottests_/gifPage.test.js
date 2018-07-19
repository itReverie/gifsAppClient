import React from 'react';
import GifPage from '../pages/gifPage';
import renderer from 'react-test-renderer';
import gifsNormalized from '../mocks/gifsNormalized';
import {BrowserRouter} from 'react-router-dom';


it('rendering correctly a Gifs page via snapshot', () => {
  const onAddFavorite=jest.fn();
  const onSearch=jest.fn();
  const onUpdateError=jest.fn();

  const tree = renderer
    .create(<BrowserRouter><GifPage gifslist={gifsNormalized}
                     onAddFavorite={onAddFavorite}
                     onSearch={onSearch}
                     error={{}}
                     onUpdateError={onUpdateError} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});