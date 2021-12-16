import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  transform: scale(0.98);
  opacity:0;
}
to {
  transform: scale(1);
  opacity:1;
}
`;

const Box = styled.section`
 
  animation: ${(props) => (props.inView ? fadeIn : null)} 1s ease-in;
`;

const FadeIN = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Box ref={ref} inView={inView}>
      {children}
    </Box>
  );
};

export default FadeIN;
