import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledSearchButton= styled.div`
                      display: flex;
                      line-height: 34px;
                      min-width:45px;
                      margin: 0;
                      padding: 0 20px;
                      cursor: pointer;
                      color: ${theme.mainFont};
                      background-color: ${theme.mainColor};
                      background: ${theme.secondaryColor};  /* fallback for old browsers */
                      background: -webkit-linear-gradient(to bottom, ${theme.mainColor}, ${theme.secondaryColor}6);  /* Chrome 10-25, Safari 5.1-6 */
                      background: linear-gradient(to bottom, ${theme.mainColor}, ${theme.secondaryColor}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                      font-weight: bold;
                      justify-content:center;
                      border-top-right-radius: 5px;
                      border-bottom-right-radius: 5px;
                      white-space: nowrap;
                      -webkit-appearance:none;
                      box-sizing: content-box;

                      &:hover, 
                      &:focus {
                        background-color: ${theme.secondaryColor};
                      }

                      &:hover .textButton {
                        display: none;
                      }

                      .material-icons {
                        display: none;
                      }
                      &:hover .material-icons {
                        line-height: 34px;
                        display: inline;
                      
                      }`; 
