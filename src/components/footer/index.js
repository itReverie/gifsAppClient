import React from 'react';
import {StyledFooter, StyledIconAuthors, StyledLinkAuthors} from './footer.style';
const Footer = () =>{
    return (<StyledFooter>
      © {new Date().getFullYear()}
      <StyledIconAuthors>Icons made by 
          <StyledLinkAuthors href="https://www.flaticon.com/authors/those-icons">Those Icons</StyledLinkAuthors> from
          <StyledLinkAuthors href="https://www.flaticon.com/">www.flaticon.com</StyledLinkAuthors> is licensed by 
          <StyledLinkAuthors href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0 BY</StyledLinkAuthors>
      </StyledIconAuthors>
    </StyledFooter>);
  }

export default Footer;