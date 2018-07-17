import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledFooter= styled.div`
                    background-color: ${theme.thirdColor};/*#def0f0*/
                    color:${theme.mainColor};
                    height:30px;
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                    `;
export const StyledIconAuthors= styled.div`
                    color:${theme.baseSecondary};
                    font-size:0.2em;
                    `;
export const StyledLinkAuthors= styled.a`
                    color:${theme.baseSecondary};
                    font-size:0.2em;`;
                   
