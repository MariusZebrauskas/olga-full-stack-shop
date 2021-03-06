import styled, { keyframes } from 'styled-components';
import { Swiper } from 'swiper/react';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';


export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SwiperChanged = styled(Swiper)`
  width: 20rem;
  padding: 1.5rem 3rem 3rem 3rem;
  @media (min-width: 425px) {
    width: 25rem;
    padding: 1.5rem 3rem 3rem 3rem;
  }
  @media (min-width: 746px) {
    width: 40rem;
    padding: 2rem 6rem 3rem 6rem;
  }
 
`;

export const DescriptionWraapper = styled(motion.div)`
  background: #060606ed;
  position: absolute;
  top: 0;
  z-index: 200;
  width: 100%;
  min-height: ${({ clientFullHeight }) => (clientFullHeight ? `${clientFullHeight}px` : null)};
`;

export const DescriptionText = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: calc(2rem + 3vw) 2rem;
`;

export const DescriptionButton = styled(MdClose)`
  color: #f3b432;
  position: absolute;
  font-size: 3rem;
  top: calc(0.5rem + 1vw);
  right: calc(0.5rem + 1vw);
  transition: transform ease-in-out 0.7s;
  &:hover {
    transform: rotate(500deg);
    transition: transform ease-in-out 0.7s;
    cursor: pointer;
  }
`;

export const P = styled.p`
  width: 95%;
  color: #f3b432;
  text-align: justify;
  /* padding: 0 1rem; */
  padding: 0;
  margin: 0.5rem 0;
  line-height:calc(1.4rem + 1vw);
  &:nth-child(1) {
    padding: 3rem 0 0 0;
  }

  font-size: ${props => props.theme.fontSize.h1};
  text-indent: 2.5em;
  @media (min-width: 1440px) {
    width: ${(props) => (props.ultrawide ? '90%' : '70%')};
    font-size: ${props => props.theme.fontSize.h1Big};

  }
`;
