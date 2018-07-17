import React from 'react';
import PropTypes from 'prop-types';
import {StyledSearchButton} from './searchButton.style';

function SearchButton ({onSearch, text}){
    return (<StyledSearchButton id="btnSearch" onClick={onSearch}>
              <span className="textButton">{text}</span>
              <span className="material-icons">search</span>
            </StyledSearchButton>);
  }

SearchButton.propTypes = {
    onSearch: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default SearchButton;