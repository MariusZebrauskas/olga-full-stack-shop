import React from 'react';
import { Wrapper, H1 } from './styles';

const animationOne = {
  hiden: {
    opacity: 0,
    y: '1rem',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: .8, ease: "easeInOut", delay: 0.5 },
  },
};
const animationTwo = {
  hiden: {
    opacity: 0,
    y: '1rem',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};

const Header = ({ h1, h12 }) => {
  return (
    <Wrapper>
      <H1 variants={animationOne} initial='hiden' animate='animate' primary>
        {h1}
      </H1>
      <H1 secondary variants={animationTwo} initial='hiden' animate='animate'>
        {h12}
      </H1>
    </Wrapper>
  );
};

export default Header;
