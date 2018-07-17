import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const StyledBox= styled.div`
                    width:50%;
                    ${media.tablet`width: 90%;`}
                    ${media.phone`width: 90%;`}`;
export const StyledSearchBox= styled.div`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between ;
                    align-items: center;
                    background-color: ${theme.base};
                    color:${theme.secondaryFont};
                    margin: 10px;`;

