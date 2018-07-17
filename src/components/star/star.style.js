import styled from 'styled-components';

export const StyledStar= styled.img`
                       width: 18px;
                       height: 18px;
                       cursor: pointer;
                       &:hover, 
                       &:focus {
                        animation: roll 3s 1;
                        transform: rotate(30deg);
                      }
                      @keyframes roll {
                        0% {
                          transform: rotate(0);
                        }
                        100% {
                          transform: rotate(360deg);
                        }
                      }`;