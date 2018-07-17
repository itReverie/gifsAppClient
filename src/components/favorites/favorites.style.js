import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledFavoritesBox= styled.div`
                    color:${theme.mainColor};
                    display: flex;
                    flex-flow:column;
                    justify-content:space-around;
                    align-items: center;
                    margin-right: 40px;
                    font-size:0.7em;
                    cursor: pointer;`;

export const StyledIconFavorites=styled.img`
                                 width:32px;
                                 max-width:32px;
                                 cursor: pointer;`;