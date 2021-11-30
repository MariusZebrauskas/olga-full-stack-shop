import React from 'react';
import { Wrapper, H1 } from './styles';


const Header = ({ h1, h12 }) => {
  return (
    <Wrapper>
      <H1 primary>{h1}</H1>
      <H1 secondary>{h12}</H1>
    </Wrapper>
  );
};

export default Header;
