import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledSearchInput= styled.input`
                      margin: 0;
                      padding: 0 10px;
                      background-color: ${theme.baseSecondary};
                      border: 0;
                      border-top-left-radius: 5px;
                      border-bottom-left-radius: 5px;
                      width: 100%;
                      height: 35px;
                      line-height: 34px;
                     -moz-box-sizing: border-box;
                     -webkit-appearance:none;
                     box-sizing: content-box;
                     outline-style: none;
                     font-family: inherit;
                     font-size: inherit;
                     text-transform: inherit;
                     
                     &:focus {
                        outline-width: 0;
                      }`;