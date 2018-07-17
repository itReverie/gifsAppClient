import React from 'react';
import PropTypes from "prop-types";
import { StyledFavoritesBox, StyledIconHome, StyledIconBack } from './header.style';
import Favorites from '../favorites/';
import home from '../../images/icons/home.svg';
import back from '../../images/icons/back.svg';
import { Link } from 'react-router-dom'

const Header = (props) =>{
        return (<StyledFavoritesBox >
                    <Link to="/">
                            <StyledIconHome src={home}/>
                    </Link>
                    {props.isFavorites?<Link to="/">
                                                    <StyledIconBack src={back}/>
                                        </Link>
                                        :<Favorites />}
                </StyledFavoritesBox>);
}

Header.propTypes={
    isFavorites:PropTypes.bool
}

Header.defaultProps = {
    isFavorites: false
  }

export default Header;