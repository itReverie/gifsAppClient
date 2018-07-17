import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledSearchBox } from './searchBox.style';
import SearchInput from '../searchInput/';
import SearchButton from '../searchButton/';
import Error from '../error/';

export default class SearchBox extends Component{

  constructor(props) {
     super(props);
     this.state={searchTerm:''};
     this.onSearchTextChange = this.onSearchTextChange.bind(this);
     this.onSearch = this.onSearch.bind(this);    
  }

  onSearchTextChange = (event) => {
    this.setState({searchTerm:event.target.value});
    this.props.onUpdateError(null);
  }

  onSearch = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  render(){
    const { error } = this.props;

    return (<StyledBox>
                <StyledSearchBox>
                    <SearchInput onSearchTextChange={this.onSearchTextChange}
                                onSearch={this.onSearch}/>
                    <SearchButton text="Search" 
                                  onSearch={this.onSearch} />
              </StyledSearchBox>
              <Error error={error} />
           </StyledBox>);
  }
}

SearchBox.propTypes={
  onSearch: PropTypes.func.isRequired,
  error: PropTypes.object,
  onUpdateError: PropTypes.func.isRequired
}
