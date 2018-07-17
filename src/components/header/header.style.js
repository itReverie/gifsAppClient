import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledFavoritesBox= styled.div`
                    background-color: #aef0f0;/*#def0f0*/
                    color:${theme.mainColor};
                    height:70px;
                    display: flex;
                    justify-content:space-between;
                    align-items: center;`;
export const StyledIconHome=styled.img`
                    width:40px;
                    max-width:40px;
                    margin-left:40px;
                    cursor: pointer;`;
export const StyledIconBack=styled.img`
                    width:40px;
                    max-width:40px;
                    margin-right:40px;
                    cursor: pointer;`;