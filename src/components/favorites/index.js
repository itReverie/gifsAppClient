import React, {Component} from 'react';
import { StyledFavoritesBox , StyledIconFavorites} from './favorites.style';
import favorites from '../../images/icons/favorites.svg';

export default class Favorites extends Component{

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        let open_link = window.open('','_blank');
        open_link.location="/favorites";
    }

    render(){
        return (<StyledFavoritesBox onClick={this.onClick}>
            <StyledIconFavorites src={favorites}/>
            <div>My Favorite Gifs</div>
           </StyledFavoritesBox>);
            
  }
}
