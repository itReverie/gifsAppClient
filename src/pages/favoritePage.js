import React, {Component} from 'react';
import PropTypes from "prop-types";
import Error from '../components/error';
import Header from '../components/header';
import GifsList from '../components/gifsList/';
import errors from '../utils/errors';
import {StyledContent} from './pages.style';

 class FavoritePage extends Component {
  render() {
        let gifsListComponent= <Error error={{message:errors.UserInterface.NoFavorites}} />;
        if (Object.keys(this.props.favoriteGifs).length>0) {
          gifsListComponent = <GifsList gifsList={this.props.favoriteGifs}
                                        onAddFavorite={this.props.onAddFavorite} />;
        }
        
        return (<StyledContent>
                    <Header isFavorites={true} />
                    {gifsListComponent}
                </StyledContent>);
    }
}

FavoritePage.propTypes={
  favoriteGifs: PropTypes.object,
  onAddFavorite : PropTypes.func.isRequired
};



export default FavoritePage;
