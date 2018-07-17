import React , {Component} from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gifActions from "../actions/gifActions";
import * as favoriteActions from "../actions/favoriteActions";

import GifPage from '../pages/gifPage';
import FavoritePage from '../pages/favoritePage';
import Footer from '../components/footer/';
import {StyledLayout} from './primaryLayout.style';


 class PrimaryLayout extends Component {

  componentDidMount() {
    //Call the api if the list of gifs is empty otherwise get it from storage
    if(!Object.keys(this.props.gifslist).length)
    {
      //TODO: If I have time add a smarter way to randomize that word.For example: load gifs based on a commemoration day.
      this.props.actions.loadGifs('smile');
    }
    this.props.actions.loadError(null);
  }

 componentWillMount(){
      this.onSearch = this.onSearch.bind(this);
      this.onAddFavorite = this.onAddFavorite.bind(this);
      this.onUpdateError = this.onUpdateError.bind(this);
  }

  onSearch = (searchTerm) => {
    this.props.actions.loadGifs(searchTerm);
  }

  onUpdateError= (error) => {
    this.props.actions.loadError(error);
  }

  onAddFavorite = (favoriteGif) => {
       this.props.actions.addFavorite(favoriteGif);
       this.props.actions.setFavorite(favoriteGif);
  }

  render() {
        const gifPage=<GifPage gifslist={this.props.gifslist}
                                      onAddFavorite={this.onAddFavorite}
                                      onSearch={this.onSearch}
                                      error={this.props.error}
                                      onUpdateError={this.onUpdateError} />;
        const favoritePage=<FavoritePage favoriteGifs={this.props.favoriteGifs}
                                            onAddFavorite={this.onAddFavorite} />;
        return (<StyledLayout>
                    <BrowserRouter>
                      <Switch>
                          <Route path='/' exact     render={() => gifPage } />
                          <Route path='/favorites'  render={() => favoritePage } />
                          <Route render={() => gifPage}/>
                      </Switch>
                      </BrowserRouter>
                      <Footer />
               </StyledLayout>);
    }
}

GifPage.propTypes={
  actions : PropTypes.object,
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {gifslist: state.gifs,
          favoriteGifs: state.favorites,
          error: state.error};
}

function mapDispatchToProps (dispatch)
{
  return {
    dispatch: dispatch,
    actions: bindActionCreators({...gifActions, ...favoriteActions},dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryLayout);

