import React from 'react';
import PropTypes from 'prop-types';
import GifCard from '../gifCard/';
import {StyledGifsList} from './gifsList.style';

const GifsList = (props) => {
    return (<StyledGifsList>
                {Object.values(props.gifsList).map(
                 (gif) => ( <GifCard key={gif.id} 
                                     gif={gif}
                                     onAddFavorite={props.onAddFavorite} /> ))}
            </StyledGifsList>);
  }

GifsList.propTypes={
  gifsList: PropTypes.object.isRequired,
  onAddFavorite: PropTypes.func.isRequired
}

export default GifsList;
