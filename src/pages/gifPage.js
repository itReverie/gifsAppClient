import React, {Component} from 'react';
import PropTypes from "prop-types";
import SearchBox from '../components/searchBox';
import GifsList from '../components/gifsList';
import Header from '../components/header';
import {StyledContent,StyledContentBox} from './pages.style';

 export default class GifPage extends Component {

  render() {
        let gifsListComponent=null;
        if (this.props.gifslist) {
          gifsListComponent = <GifsList gifsList={this.props.gifslist} 
                                        onAddFavorite={this.props.onAddFavorite}/>;
        }
        return (<StyledContent>
                  <Header />
                  <StyledContentBox>
                    <SearchBox  onSearch={this.props.onSearch}
                                error={this.props.error}
                                onUpdateError={this.props.onUpdateError} />
                  </StyledContentBox>
                  {gifsListComponent}
              </StyledContent>);
    }
}

GifPage.propTypes={
  gifslist: PropTypes.object,
  error: PropTypes.object,
  onAddFavorite : PropTypes.func.isRequired, 
  onSearch : PropTypes.func.isRequired,
  onUpdateError: PropTypes.func.isRequired
};
