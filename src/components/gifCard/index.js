import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyledGifCard,StyledStarBox, StyledDivImage } from './gifCard.style';
import Star from '../star/';
import LoaderImage from '../loaderImage/';
import imageLoader from '../../images/imgLoader.png';
  
export default class GifCard extends Component{

    constructor(props) {
        super(props);
        this.onAddFavorite = this.onAddFavorite.bind(this);
        this.state = { loading:true}
    }

    componentDidMount() {
        LoaderImage(
          this.card,
          this.props.gif.preview.url,
          5,
          () => this.setState({ loading: false }),
          () => {}
        );
      }

    onAddFavorite = (isFavorite) => {
        const favoriteGif={gif:this.props.gif,
                        isFavorite:isFavorite}
        this.props.onAddFavorite(favoriteGif);
    }

    render(){
    return (<StyledGifCard >
                <StyledDivImage innerRef={card => this.card = card}>
                    {this.state.loading?<img src={imageLoader} alt='loading'/>:null}
                </StyledDivImage>
               <StyledStarBox>
                   <Star onClick={this.onAddFavorite} 
                         active={this.props.gif.isFavorite} />
                </StyledStarBox>
            </StyledGifCard>);
  }
}

  GifCard.propTypes={
     gif: PropTypes.object.isRequired,
     onAddFavorite: PropTypes.func.isRequired
}

