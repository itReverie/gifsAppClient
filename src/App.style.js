import styled from 'styled-components';
import theme from './styles/theme';

export const LoaderStyled=styled.div`
                            &:empty {
                            position: absolute;
                            top: calc(50% - 4em);
                            left: calc(50% - 4em);
                            width: 4em;
                            height: 4em;
                            border: 1.1em solid rgba(72, 177, 191);
                            border-left: 1.1em solid ${theme.base};
                            border-radius: 50%;
                            animation: loader 1.1s infinite ease-in-out;
                        }
                        
                        @keyframes loader {
                            0% {
                            transform: rotate(0deg);
                            }
                            100% {
                            transform: rotate(360deg);
                            }
                        }`;