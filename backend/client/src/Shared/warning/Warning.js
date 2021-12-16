import React from 'react';
import { Wrapper } from './styles';

const Warning = ({ children, background, color, margin }) => {
  return (
    <Wrapper margin={margin} background={background} color={color}>
      {children}
    </Wrapper>
  );
};

export default Warning;
