import createTheme from 'styled-components-theme';
import {injectGlobal}  from 'styled-components';
import colors from './colors';
import fonts from './fonts';


const theme = createTheme(...Object.keys(colors))

injectGlobal`
body {
  font-family: ${fonts.font};
  text-transform: ${fonts.transformation};
  background-color: ${colors.base};
  color: ${colors.secondaryFont};
  height: 100%;
  width: 100%;
  margin:0px;
}`;

export default theme;
