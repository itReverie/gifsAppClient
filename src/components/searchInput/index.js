import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyledSearchInput } from './searchInput.style';

export default class SearchInput extends Component {

  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     this.props.onSearch();
    }
  }

  render(){
    const { onSearchTextChange } = this.props;

    return (<StyledSearchInput type="search" 
                               placeholder='Search a gif' 
                               onChange={onSearchTextChange}
                               onKeyPress={this.handleKeyPress}/>);
  }
}

SearchInput.propTypes={
  onSearchTextChange: PropTypes.func.isRequired, 
  onSearch: PropTypes.func.isRequired, 
}
