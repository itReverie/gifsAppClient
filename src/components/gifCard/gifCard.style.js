import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const StyledStarBox= styled.div`
                        display: flex;
                        justify-content: flex-end;
                        margin: 0px 10px 5px 0px;
                      `

export const StyledGifCard= styled.div`
                    display: flex;
                    flex-direction:column;
                    justify-content: space-between ;
                    background-color: ${theme.baseSecondary};/*#ffffff  #def0f0    #cef0f0*/
                    margin:10px;
                    `;

export const StyledDivImage= styled.div`
                    margin:10px 10px 5px 10px;
                    min-width:200px;
                    max-width:200px;
                    min-height:180px;
                    max-height:180px;
                    ${media.tablet`min-width: 250px; min-height: 150px`}
                    `;  
